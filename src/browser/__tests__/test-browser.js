describe('browser', () => {
    jest.autoMockOff();

    jest.setMock(
        '../../middlewares/logger',
        () => (next) => (action) => next(action)
    );

    require('../index.js');
});
