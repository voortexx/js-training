'use strict'

/*
 * Create a function `multiply` that takes two number arguments
 * and returns the result of the multiplication of those two.
 * But you must do this without using the operators * or /
 *
 * @notions Primitive and Operators, Functions, While
 */

// Your code :

function multiply(number1, number2){
    if (number2<0 && number1>0){
      let result =0;
      for(let i = 0; i < number1; i++){
        result += number2;
      }
      return result;
    }

    else if (number1<0 && number2<0){
      let result =0;
      for(let i = 0; i < Math.abs(number1); i++){
        result += number2;
      }
      return Math.abs(result);
    }

    else{
      let result =0;
      for(let i = 0; i < number2; i++){
        result += number1;
      }
      return result;
    }
  }

//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof multiply, 'function')
assert.strictEqual(multiply.length, 2)
assert.strictEqual(multiply.toString().includes('Math.imul'), false)
assert.strictEqual(multiply.toString().includes('*'), false)
assert.strictEqual(multiply.toString().includes('/'), false)
assert.strictEqual(multiply(34, 78), 2652)
assert.strictEqual(multiply(123, 0), 0)
assert.strictEqual(multiply(0, -230), 0)
assert.strictEqual(multiply(0, 0), 0)
assert.strictEqual(multiply(123, -22), -2706)
assert.strictEqual(multiply(-22, 123), -2706)
assert.strictEqual(multiply(-22, -123), 2706)
// End of tests */
