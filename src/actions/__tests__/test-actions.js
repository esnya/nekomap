describe('actions', () => {
    jest.autoMockOff();

    const { readdirSync } = require('fs');
    const { join } = require('path');

    const dir = join(__dirname, '..');

    const table = {};
    readdirSync(dir)
        .map((path) => path.match(/^(.*).js$/))
        .filter((m) => Boolean(m))
        .map((m) => m[1])
        .forEach((name) => {
            table[name] = require(`../${name}`);
        });

    const types = {};

    Object.keys(table)
        .forEach((name) => {
            describe(name, () => {
                const actions = table[name];

                Object.keys(actions)
                    .forEach((key) => {
                        if (key.match(/^[A-Z0-9_]+$/)) {
                            const value = actions[key];

                            describe(key, () => {
                                it('is action type string', () => {
                                    expect(value).toMatch(/^[A-Z0-9_]+$/);
                                });
                            });

                            if (!(value in types)) types[value] = 0;
                            types[value]++;
                        } else if (key.match(/^[a-z][a-zA-Z0-9]*$/)) {
                            describe(key, () => {
                                it('is action creator', () => {
                                    expect(typeof(actions[key])).toEqual('function');
                                });
                            });
                        }
                    });
            });
        });

    describe('type', () => {
        Object.keys(types)
            .forEach((type) => {
                describe(type, () => {
                    it('is unique', () => {
                        expect(types[type]).toBe(1);
                    });
                });
            });
    });
});
