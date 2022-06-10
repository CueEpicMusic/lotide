const { without } = require(`../index`);
const assert = require(`chai`).assert;
// const assertArraysEqual = require(`../assertArraysEqual`);

// assertArraysEqual(without([1, 2, 3], [1]), [2, 3]) // => [2, 3]
// assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ['1', '2'])
// => ["1", "2"]

// const words = ["hello", "world", "lighthouse"];
// console.log(without(words, ["lighthouse"])); // no need to capture return value for this test case
// // Make sure the original array was not altered by the without function
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);

describe(`#without`, () => {
  it(`returns [2, 3] for [1, 2 ,3]`, () => {
    assert.deepEqual(without([1, 2, 3], [1]), [2, 3]);
  });
  it(`returns ['1', '2'] for ['1', '2', '3']`, () => {
    assert.deepEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
  });
});
