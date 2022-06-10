const index = require(`../index`);
const assertArraysEqual = require(`../assertArraysEqual`);
const assert = require(`chai`).assert

// console.log(assertArraysEqual(letterPositions("hello").h, [0]));

// console.log(assertArraysEqual(letterPositions("hello").e, [1]));

// console.log(assertArraysEqual(letterPositions("hello").l, [2, 3]));

// console.log(assertArraysEqual(letterPositions("hello").o, [4]));

describe(`#letterPositions`, () => {
  it(`return [0] for ('hello').h`, () => {
    assert.deepEqual(index.letterPositions('hello').h, [0]);
  });
  it(`return [1] for ('hello').e`, () => {
    assert.deepEqual(index.letterPositions('hello').e, [1]);
  });
  it(`return [2, 3] for ('hello').l`, () => {
    assert.deepEqual(index.letterPositions('hello').l, [2, 3]);
  });
  it(`return [4] for ('hello').o`, () => {
    assert.deepEqual(index.letterPositions('hello').o, [4]);
  });
});