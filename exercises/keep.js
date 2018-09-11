'use strict'

/*
 * Create a `keepFirst` function that takes a string as parameter
 * and return the string only keeping the 2 first characters
 *
 * Create a `keepLast` function that takes a string as parameter
 * and return the string only keeping the 2 last characters
 *
 * Create a `keepFirstLast` function that takes a string as parameter
 * and only keep 2 characters from the third character
 *
 */


 function keepFirst(string){
     return string.slice(0,2);
 }

 function keepLast(string){
     return string.slice(string.length -2, string.length);
 }

 function keepFirstLast(string){
    return string.slice(0,2)+string.slice(string.length -2, string.length);
 }

//* Begin of tests
const assert = require('assert')
assert.strictEqual(typeof keepFirst, 'function')
assert.strictEqual(keepFirst.length, 1)
assert.deepStrictEqual(keepFirst('abracadabra'), 'ab')
assert.deepStrictEqual(keepFirst('spoutnik'), 'sp')
assert.deepStrictEqual(keepLast('abracadabra'), 'ra')
assert.deepStrictEqual(keepLast('spoutnik'), 'ik')
assert.deepStrictEqual(keepFirstLast('abracadabra'), 'abra')
assert.deepStrictEqual(keepFirstLast('spoutnik'), 'spik')
// End of tests */
