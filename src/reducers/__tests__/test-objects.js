describe('reducers', () => {
    describe('objects', () => {
        const { createStore } = require('redux');
        const { generate } = require('shortid');
        const THREE = require('three');

        const Obj = require('../../graphics/object').default;

        jest.unmock('../../actions/object');
        const Actions = require('../../actions/object');

        jest.unmock('../objects');
        const store = createStore(require('../objects').default);
        it('has initial state of Object3D', () => {
            const state = store.getState();

            expect(state instanceof THREE.Object3D).toBe(true);
        });

        it('appends new object', () => {
            generate
                .mockReturnValueOnce(1)
                .mockReturnValueOnce(2);
            store.dispatch(Actions.create({ id: 1, type: 'TEST' }));
            store.dispatch(Actions.create({ id: 2, type: 'TEST' }));
            expect(Obj.mock.calls[0][0]).toEqual({ id: 1, type: 'TEST' });
            expect(Obj.mock.calls[1][0]).toEqual({ id: 2, type: 'TEST' });
            const { calls } = store.getState().add.mock;
            expect(calls.length).toBe(2);
            expect(calls[0][0]).toBe(Obj.mock.instances[0]);
            expect(calls[1][0]).toBe(Obj.mock.instances[1]);
        });

        it('translates object', () => {
            const state = store.getState();
            const object = Obj.mock.instances[1];
            object.position = new THREE.Vector3();
            state.getObjectByName.mockReturnValueOnce(object);

            store.dispatch(Actions.translate(1, [1, 2, 3]));

            expect(state.getObjectByName).toBeCalledWith(1);
            expect(object.position.fromArray).toBeCalledWith([1, 2, 3]);
        });

        it('rotates object', () => {
            const state = store.getState();
            const object = Obj.mock.instances[0];
            state.getObjectByName.mockReturnValueOnce(object);

            THREE.Math.degToRad = jest.fn((deg) => deg * Math.PI / 180);

            store.dispatch(Actions.rotate(2, 15));

            expect(state.getObjectByName).toBeCalledWith(1);
            expect(object.rotateY).toBeCalledWith(15 * Math.PI / 180);
        });

        it('scales object', () => {
            const state = store.getState();
            const object = Obj.mock.instances[1];
            object.scale = new THREE.Vector3();
            state.getObjectByName.mockReturnValueOnce(object);

            store.dispatch(Actions.scale(1, [1, 2, 3]));

            expect(state.getObjectByName).toBeCalledWith(1);
            expect(object.scale.fromArray).toBeCalledWith([1, 2, 3]);
        });

        it('removes object', () => {
            const state = store.getState();
            const object = Obj.mock.instances[0];
            state.getObjectByName.mockReturnValueOnce(object);

            store.dispatch(Actions.remove(1));

            expect(state.remove).toBeCalledWith(object);
        });
    });
});
