const { countOnly } = require(`../index`);
const assert = require("chai").assert;
// const assertEqual = require(`../assertEqual`);

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe",
];

const result1 = countOnly(firstNames, {
  Jason: true,
  Karima: true,
  Fang: true,
  Agouhanna: false,
});

// assertEqual(result1["Jason"], 1);
// assertEqual(result1["Karima"], undefined);
// assertEqual(result1["Fang"], 2);
// assertEqual(result1["Agouhanna"], undefined);

describe(`#countOnly`, () => {
  it(`returns 1 for ['Jason]`, () => {
    assert.strictEqual(result1["Jason"], 1);
  });
  it(`returns undefined for ['Karima]`, () => {
    assert.strictEqual(result1["Karima"], undefined);
  });
  it(`returns 2 for ['Fang']`, () => {
    assert.strictEqual(result1["Fang"], 2);
  });
  it(`returns undefined fo ['Agouhanna']`, () => {
    assert.strictEqual(result1["Agouhanna"], undefined);
  });
  it(`returns { Fang: 2, Jason: 1} fo { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false }`, () => {
    assert.deepEqual(
      countOnly(firstNames, {
        Jason: true,
        Karima: true,
        Fang: true,
        Agouhanna: false,
      }),
      { Fang: 2, Jason: 1 }
    );
  });
});
