import THREE from 'three';

export default class Scene extends THREE.Scene {
    constructor() {
        super();

        const ambient = new THREE.AmbientLight(0x404040);
        this.add(ambient);

        const directional = new THREE.DirectionalLight(0xffffff, 0.5);
        directional.position.set(0, 1, 1);
        this.add(directional);
    }
}
