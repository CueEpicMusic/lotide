const index = require(`../index`)
const assertEqual = require(`../assertEqual`)
const assert = require('chai').assert

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = index.countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });


// console.log(assertEqual(result1["Jason"], 1));
// console.log(assertEqual(result1["Karima"], undefined));
// console.log(assertEqual(result1["Fang"], 2));
// console.log(assertEqual(result1["Agouhanna"], undefined));

describe(`#countOnly`, () => {
  it(`returns 1 for ['Jason]`, () => {
    assert.strictEqual(result1['Jason'], 1);
  });
});