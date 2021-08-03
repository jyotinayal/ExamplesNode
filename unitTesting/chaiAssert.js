var assert = require('chai').assert;
var numbers = [1, 2, 3, 4, 5];

assert.isArray(numbers, 'is array of numbers');
assert.include(numbers, 2, 'array contains 2');
//assert.include(numbers, 6, 'array contains 6');
assert.lengthOf(numbers, 5, 'array contains 5 numbers');