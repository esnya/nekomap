import THREE from 'three';

const container = document.getElementById('scene');

const width = container.offsetWidth;
const height = container.offsetHeight;

export const scene = new THREE.Scene();

export const objects = new THREE.Object3D();
scene.add(objects);

export const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
camera.position.x = 1;
camera.position.y = 2;
camera.position.z = 5;
camera.lookAt(new THREE.Vector3(0, 0, 0));

const light = new THREE.AmbientLight(0x404040);
scene.add(light);

const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
directionalLight.position.set(0, 1, 0);
scene.add(directionalLight);

export const renderer = new THREE.WebGLRenderer();
container.appendChild(renderer.domElement);

renderer.setSize(width, height);
renderer.setClearColor(0x888888);

export function render() {
    requestAnimationFrame(render);
    renderer.render(scene, camera);
}
render();

window.addEventListener('resize', () => {
    const w = container.offsetWidth;
    const h = container.offsetHeight;

    camera.aspect = w / h;
    camera.updateProjectionMatrix();

    renderer.setSize(width, height);
});
