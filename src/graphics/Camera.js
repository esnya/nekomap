import THREE from 'three';

export default class Camera extends THREE.PerspectiveCamera {
    constructor() {
        super(75, 1.0, 0.1, 1000);

        this.position.set(1, 5, 5);
        this.lookAt(new THREE.Vector3(0, 0, 0));
        this.updateProjectionMatrix();
    }
}
