'use strict'

/*
 * Create a `whisper` function that takes a string
 * and return the same string in lower case
 * and wrapped by `*`
 *
 */

 function whisper(string){
    let stringModif = "*" + string.toLowerCase() + "*";
     return (stringModif);
 }

//* Begin of tests
const assert = require('assert')
assert.strictEqual(typeof whisper, 'function')
assert.strictEqual(whisper.length, 1)
assert.deepStrictEqual(whisper('ABRA'), '*abra*')
assert.deepStrictEqual(whisper('TEST'), '*test*')

// End of tests */
