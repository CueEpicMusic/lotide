const assertArraysEqual = require(`../assertArraysEqual`)
const middle = require(`../middle`)
const assert = require(`chai`).assert;

// console.log(assertArraysEqual(middle([1]), [])) // => []
// console.log(assertArraysEqual(middle([1, 2]), [])) // => []
// console.log(assertArraysEqual(middle([1, 2, 3]), [2])) // => [2]
// console.log(assertArraysEqual(middle([1, 2, 3, 4, 5]),[3])) // => [3]
// console.log(assertArraysEqual(middle([1, 2, 3, 4]), [2, 3])) // => [2, 3]
// console.log(assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4])) // => [3, 4]

describe(`#middle`, () => {
  it(`returns [1] for []`, () => {
    assert.deepEqual(middle([1]), []);
  });
  it(`returns [1, 2] for []`, () => {
    assert.deepEqual(middle([1, 2]), []);
  });
  it(`returns [1, 2, 3] for [2]`, () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
  it(`returns [1, 2, 3, 4] for [2, 3]`, () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });
  it(`returns [1, 2, 3, 4, 5, 6] for [3, 4]`, () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });
});