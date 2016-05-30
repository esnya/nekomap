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

    Object.keys(table)
        .forEach((name) => {
            describe(name, () => {
                const actions = table[name];

                Object.keys(actions)
                    .forEach((key) => {
                        if (key.match(/^[A-Z0-9_]+$/)) {
                            describe(key, () => {
                                it('is action type string', () => {
                                    expect(actions[key]).toMatch(/^[A-Z0-9_]+$/);
                                });
                            });
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
});
