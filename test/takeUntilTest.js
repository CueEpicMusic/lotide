const { takeUntil } = require("../index");
const assert = require("chai").assert;
// const assertArraysEqual = require('../assertArraysEqual');

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, (x) => x < 0);
// assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]);

const data2 = [
  "I've",
  "been",
  "to",
  "Hollywood",
  ",",
  "I've",
  "been",
  "to",
  "Redwood",
];
const results2 = takeUntil(data2, (x) => x === ",");
// assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]);

describe(`#takeUntil`, () => {
  it(`return [1, 2, 5, 7, 2] for [1, 2, 5, 7, 2, -1, 2, 4, 5]`, () => {
    assert.deepEqual(results1, [1, 2, 5, 7, 2]);
  });
  it(`return ['I've', 'been', 'to', 'Hollywood'] for ['I've', 'been', 'to', 'Hollywood', ',', 'I've', 'been', 'to', 'Redwood']`, () => {
    assert.deepEqual(results2, ["I've", "been", "to", "Hollywood"]);
  });
});
