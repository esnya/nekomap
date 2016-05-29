/* eslint-env jest */

describe('utilities', () => {
    describe('id', () => {
        jest.autoMockOff();

        it('generates unique id', () => {
            const now = 1234;
            const random = 5678;

            Date.now = jest.fn().mockReturnValue(now);
            Math.random = jest.fn().mockReturnValue(random);

            const { generate } = require('../id');

            const id = generate();
            expect(typeof(id)).toEqual('string');
            expect(id).toMatch(/^[0-9a-f]{20}$/);
            expect(id.length).toBe(20);

            expect(generate()).not.toEqual(id);
            expect(generate(10).length).toBe(10);
        });
    });
});
