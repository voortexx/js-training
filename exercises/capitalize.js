'use strict'

/*
 * Create a `capitalize` function that takes a string
 * and transforms it to upper case only for the first letter,
 * and in lowercase for the rest of the string
 *
 */


 function capitalize(string){
    let stringCapitalize ="";
     for(let i = 0; i < string.length; i++){
         if (i == 0){
             stringCapitalize += string[i].toUpperCase();
         }
         else {stringCapitalize += string[i].toLowerCase();
        }
    }
     return stringCapitalize;
 }

//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof capitalize, "function")
assert.strictEqual(capitalize('str'), 'Str')
assert.strictEqual(capitalize('qsdqsdqsd'), 'Qsdqsdqsd')
assert.strictEqual(capitalize('STR'), 'Str')
assert.strictEqual(capitalize('zapZAP'), 'Zapzap')
// End of tests */
