describe('reducers', () => {
    describe('objects', () => {
        const { fromJS } = require('immutable');
        const { createStore } = require('redux');

        jest.unmock('../../actions/object');
        const Actions = require('../../actions/object');

        jest.unmock('../objects');
        const store = createStore(require('../objects').default);
        it('has initial state of empty List', () => {
            expect(store.getState()).isEmpty();
        });

        it('appends new object', () => {
            store.dispatch(Actions.create({ id: 1, type: 'TEST' }));
            store.dispatch(Actions.create({ id: 2, type: 'TEST' }));
            expect(store.getState()).toEqualImmutable(fromJS([
                { id: 1, type: 'TEST' },
                { id: 2, type: 'TEST' },
            ]));
        });

        it('translates object', () => {
            store.dispatch(Actions.translate(1, { x: 1, y: 2, z: 3 }));
            expect(store.getState()).toEqualImmutable(fromJS([
                { id: 1, type: 'TEST', position: { x: 1, y: 2, z: 3 } },
                { id: 2, type: 'TEST' },
            ]));
        });

        it('rotates object', () => {
            store.dispatch(Actions.rotate(2, 15));
            expect(store.getState()).toEqualImmutable(fromJS([
                { id: 1, type: 'TEST', position: { x: 1, y: 2, z: 3 } },
                { id: 2, type: 'TEST', angle: 15 },
            ]));
        });

        it('scales object', () => {
            store.dispatch(Actions.scale(1, { x: 2, y: 1, z: 0.5 }));
            expect(store.getState()).toEqualImmutable(fromJS([
                {
                    id: 1,
                    type: 'TEST',
                    position: { x: 1, y: 2, z: 3 },
                    scale: { x: 2, y: 1, z: 0.5 },
                },
                { id: 2, type: 'TEST', angle: 15 },
            ]));
        });

        it('removes object', () => {
            store.dispatch(Actions.remove(1));
            expect(store.getState()).toEqualImmutable(fromJS([
                { id: 2, type: 'TEST', angle: 15 },
            ]));
        });
    });
});
