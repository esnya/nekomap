import * as Colors from 'material-ui/styles/colors';
import THREE from 'three';

const WIDTH = 50;
const HEIGHT = 50;

function getDefaultTerrain(width, height) {
    const length = width * height;
    const terrain = new Array(length);

    for (let i = 0; i < length; i++) {
        terrain[i] = Math.random() * 0.25;
    }

    return terrain;
}

class TerrainGeometry extends THREE.PlaneBufferGeometry {
    constructor(width, height) {
        super(width, height, width, height);

        this.rotateX(- Math.PI / 2);

        const terrain = getDefaultTerrain(width, height);
        const vertices = this.attributes.position.array;
        for (let i = 0, j = 0, l = vertices.length; i < l; i ++, j += 3) {
            vertices[j + 1] = terrain[i];
        }
    }
}

function generateGridTexture(width, height) {
    const SCALE = 64;

    const canvas = document.createElement('canvas');
    canvas.width = width * SCALE;
    canvas.height = height * SCALE;

    const ctx = canvas.getContext('2d');

    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, width * SCALE, height * SCALE);

    function drawGrid(step) {
        ctx.beginPath();
        for (let x = 0; x < width / step * SCALE; x++) {
            ctx.moveTo(x * step * SCALE, 0);
            ctx.lineTo(x * step * SCALE, height * SCALE);
        }
        for (let y = 0; y < height / step * SCALE; y++) {
            ctx.moveTo(0, y * step * SCALE);
            ctx.lineTo(width * SCALE, y * step * SCALE);
        }
        ctx.stroke();
    }

    ctx.strokeStyle = Colors.blueGrey500;
    drawGrid(0.1);

    ctx.strokeStyle = Colors.blueGrey900;
    drawGrid(1);

    return canvas;
}

class TerrainTexture extends THREE.CanvasTexture {
    constructor(width, height) {
        super(generateGridTexture(width, height));
    }
}

export default class Terrain extends THREE.Mesh {
    constructor() {
        super(
            new TerrainGeometry(WIDTH, HEIGHT),
            new THREE.MeshBasicMaterial({ map: new TerrainTexture(WIDTH, HEIGHT) })
        );
    }
}
