import { createHash } from 'crypto';

const seed = Date.now() * Math.random();
let counter = 0;

/**
 * Generate unique id string
 */
export function generate(length = 20) {
    return createHash('sha1')
        .update(`${seed}:${counter++}`)
        .digest('hex')
        .substr(0, length);
}
