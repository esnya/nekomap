describe('browser', () => {
    describe('store', () => {
        jest.autoMockOff();
        const store = require('../store').default;

        it('is store', () => {
            expect(typeof(store.getState())).toEqual('object');
            expect(typeof(store.dispatch)).toEqual('function');
        });
    });
});
