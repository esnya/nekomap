import THREE from 'three';

export default class Camera extends THREE.PerspectiveCamera {
    constructor() {
        super(45, window.innerWidth / window.innerHeight, 1, 1000);
    }
}
