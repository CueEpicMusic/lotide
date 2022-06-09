const tail = require(`../tail`);
const assert = require('chai').assert;
const assertEqual = require(`../assertEqual`)

// const result = tail(["Hello", "Lighthouse", "Labs"]);
// console.log(assertEqual(result, ["Lighthouse", "Labs"]));

// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words);
// console.log(assertEqual(words.length, 3));

describe(`#tail`, () => {
  it(`returns ['Lighthouse', 'Labs'] for ['Hello', 'Lighthouse', 'Labs']`, () => {
    assert.strictEqual(tail(['Hello', 'Lighthouse', 'Labs']), ['Lighthouse', 'Labs']);
  });
});