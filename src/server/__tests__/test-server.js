describe('server', () => {
    jest.autoMockOff();

    const server = require('../index.js').default;
    server.close();
});
