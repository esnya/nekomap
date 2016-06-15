describe('reducers', () => {
    describe('camera', () => {
        const { fromJS } = require('immutable');
        const { createStore } = require('redux');

        jest.unmock('../../actions/camera');
        const Actions = require('../../actions/camera');

        jest.unmock('../camera');
        const store = createStore(require('../camera').default);
        it('has initial state of Map', () => {
            expect(store.getState()).toEqualImmutable(fromJS({
                position: { x: 0, y: 0, z: 0 },
                rotation: { x: 0, y: 0, z: 0 },
                zoom: 1,
            }));
        });

        it('translates camera', () => {
            store.dispatch(Actions.translate(4, 5));
            expect(store.getState().get('position')).toEqualImmutable(fromJS({
                x: 4,
                y: 0,
                z: 5,
            }));
        });

        it('rotates camera', () => {
            store.dispatch(Actions.rotate(15));
            expect(store.getState().get('rotation')).toEqualImmutable(fromJS({
                x: 0,
                y: 15,
                z: 0,
            }));
        });

        it('zooms camera', () => {
            store.dispatch(Actions.zoom(1.5));
            expect(store.getState().get('zoom')).toBe(1.5);
        });
    });
});
