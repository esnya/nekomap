'use strict';

const { fork } = require('child_process');
const { join } = require('path');

const CLEAR = '\x1B[2J\x1B[H';

const argStart = process.argv.findIndex((arg) => arg.match(/jest.js$/));
const args = argStart < 0 ? [] : process.argv.slice(argStart + 1);

const jest = fork(join(__dirname, '../node_modules/jest-cli/bin/jest.js'), args, {
    silent: true,
});

jest.on('exit', (code) => process.exit(code));
process.stdin.pipe(jest.stdin);

const pipe = (dst) => (data) => {
    const line = data.toString();
    const i = line.indexOf(CLEAR);

    if (i >= 0) {
        dst.write(Array.prototype.filter.call(line, (c) => c != '\u001b').join(''));
    } else {
        dst.write(data);
    }
}

jest.stdout.on('data', pipe(process.stdout));
jest.stderr.on('data', pipe(process.stderr));
