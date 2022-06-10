const { map } = require("../index");
const assert = require("chai").assert;
// const assertArraysEqual = require(`../assertArraysEqual`);

const words = ["ground", "control", "to", "major", "tom"];

const results1 = map(words, (word) => word[0]);

// assertArraysEqual((results1),['g', 'c', 't', 'm', 't']);

describe(`#map`, () => {
  it(`return ['g', 'c', 't', 'm', 't'] for ["ground", "control", "to", "major", "tom"]`, () => {
    assert.deepEqual(results1, ["g", "c", "t", "m", "t"]);
  });
});
