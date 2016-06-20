import THREE from 'three';

export default class Obj extends THREE.Mesh {
    constructor({ id }) {
        const geometry = new THREE.BoxGeometry(1, 1, 1);
        const material = new THREE.MeshLambertMaterial({ color: 0x00ff00 });

        super(geometry, material);

        this.name = id;
    }
}
