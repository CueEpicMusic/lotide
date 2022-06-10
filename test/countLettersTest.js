const { countLetters } = require("../index");
const assert = require("chai").assert;
// const assertEqual = require('../assertEqual');

// assertEqual(countLetters('LHL'), {L: 2, H: 1})
// assertEqual(countLetters('lighthouse in the house'))

describe(`#countLetters`, () => {
  it(`return {L: 2, H: 1} for 'LHL`, () => {
    assert.deepEqual(countLetters("LHL"), { L: 2, H: 1 });
  });
  it(`return { l: 1, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, n: 1 } for 'lighthouse in the house'`, () => {
    assert.deepEqual(countLetters("lighthouse in the house"), {
      l: 1,
      i: 2,
      g: 1,
      h: 4,
      t: 2,
      o: 2,
      u: 2,
      s: 2,
      e: 3,
      n: 1,
    });
  });
});
