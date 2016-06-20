describe('reducers', () => {
    describe('camera', () => {
        const { createStore } = require('redux');
        const THREE = require('three');

        jest.unmock('../../actions/camera');
        const Actions = require('../../actions/camera');
        const Camera = require('../../graphics/Camera').default;

        jest.unmock('../camera');
        const store = createStore(require('../camera').default);
        it('has initial state of Camera', () => {
            const camera = store.getState();

            expect(camera instanceof Camera).toBe(true);
        });

        it('translates camera', () => {
            const camera = store.getState();
            camera.updateProjectionMatrix.mockClear();
            camera.position = new THREE.Vector3();

            const position = new THREE.Vector3(4, 0, 5);

            store.dispatch(Actions.translate(position));

            expect(camera.position.copy).toBeCalledWith(position);
            expect(camera.updateProjectionMatrix).toBeCalled();
        });

        it('rotates camera', () => {
            const camera = store.getState();
            camera.updateProjectionMatrix.mockClear();
            const mockRad = {};
            THREE.Math.degToRad.mockReturnValueOnce(mockRad);

            store.dispatch(Actions.rotate(15));

            expect(camera.rotateY).toBeCalledWith(mockRad);
            expect(camera.updateProjectionMatrix).toBeCalled();
        });

        it('zooms camera', () => {
            const camera = store.getState();
            camera.updateProjectionMatrix.mockClear();
            camera.zoom = 1;

            store.dispatch(Actions.zoom(1.5));

            expect(camera.zoom).toBe(1.5);
            expect(camera.updateProjectionMatrix).toBeCalled();
        });
    });
});
