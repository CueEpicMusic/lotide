const index = require('../index');
const assert = require('chai').assert;
const assertArraysEqual = require('../assertArraysEqual');

// console.log(assertArraysEqual(index.flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6])) // => [1, 2, 3, 4, 5, 6]

describe(`#flatten`, () => {
  it(`returns [1, 2, 3, 4, 5, 6] for [1, 2, [3, 4], 5, [6]]`, () => {
    assert.deepEqual(index.flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
  });
});