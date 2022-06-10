const { letterPositions } = require(`../index`);
const assert = require(`chai`).assert;
// const assertArraysEqual = require(`../assertArraysEqual`);

// assertArraysEqual(letterPositions("hello").h, [0]);

// assertArraysEqual(letterPositions("hello").e, [1]);

// assertArraysEqual(letterPositions("hello").l, [2, 3]);

// assertArraysEqual(letterPositions("hello").o, [4]);

describe(`#letterPositions`, () => {
  it(`return { h: [ 0 ], e: [ 1 ], l: [ 2, 3 ], o: [ 4 ] } for ('hello')`, () => {
    assert.deepEqual(letterPositions("hello"), {
      h: [0],
      e: [1],
      l: [2, 3],
      o: [4],
    });
  });
  it(`return [0] for ('hello').h`, () => {
    assert.deepEqual(letterPositions("hello").h, [0]);
  });
  it(`return [1] for ('hello').e`, () => {
    assert.deepEqual(letterPositions("hello").e, [1]);
  });
  it(`return [2, 3] for ('hello').l`, () => {
    assert.deepEqual(letterPositions("hello").l, [2, 3]);
  });
  it(`return [4] for ('hello').o`, () => {
    assert.deepEqual(letterPositions("hello").o, [4]);
  });
});
