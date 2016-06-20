describe('browser', () => {
    jest.autoMockOff();

    jest.setMock(
        '../../middlewares/logger',
        () => (next) => (action) => next(action)
    );

    const THREE = jest.genMockFromModule('three');
    THREE.WebGLRenderer.prototype.render = jest.fn();
    THREE.WebGLRenderer.prototype.setSize = jest.fn();
    THREE.WebGLRenderer.prototype.setClearColor = jest.fn();
    jest.setMock('three', THREE);

    jest.mock('../../components/Canvas');
    jest.mock('../../graphics/Camera');

    const app = document.createElement('div');
    app.setAttribute('id', 'app');
    document.body.appendChild(app);

    window.requestAnimationFrame = jest.fn();

    require('../index.js');
});
