describe('middlewares', () => {
    describe('logger', () => {
        jest.unmock('../logger');
        require('../logger');
    });
});
