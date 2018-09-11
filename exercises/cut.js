'use strict'

/*
 * Create the `cutFirst` function that takes a string and remove the 2 first characters
 * Create the `cutLast` function that takes a string and remove the 2 last characters
 * Create the `cutFirstLast` function that takes a string as parameter
 * and remove the 2 first characters and 2 last characters
 *
 * @notions String methods
 * https://github.com/nan-academy/refs/blob/master/js-training/methods.md#string---transform
 */

 function cutFirst(string){
     return string.substr(2);
 }

 function cutLast(string){
    return string.slice(0, -2);
 }

 function cutFirstLast(string){
     return string.substr(2).slice(0,-2);
 }

//* Begin of tests
const assert = require('assert')
assert.strictEqual(typeof cutFirst, 'function')
assert.strictEqual(cutFirst.length, 1)
assert.deepStrictEqual(cutFirst('abracadabra'), 'racadabra')
assert.deepStrictEqual(cutFirst('spoutnik'), 'outnik')
assert.deepStrictEqual(cutLast('abracadabra'), 'abracadab')
assert.deepStrictEqual(cutLast('spoutnik'), 'spoutn')
assert.deepStrictEqual(cutFirstLast('abracadabra'), 'racadab')
assert.deepStrictEqual(cutFirstLast('spoutnik'), 'outn')
// End of tests */
