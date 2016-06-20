import THREE from 'three';

export default class Renderer extends THREE.WebGLRenderer {
    constructor(container) {
        super();

        this.adjustSize(container);
        this.setClearColor(0xdddddd);

        container.appendChild(this.domElement);
    }

    adjustSize(container) {
        const width = container.offsetWidth;
        const height = container.offsetHeight;

        this.setSize(width, height);

        return width / height;
    }
}
