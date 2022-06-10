const index = require(`../index`);
const assertEqual = require(`../assertEqual`);
const assert = require(`chai`).assert;

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

// console.log(assertEqual(index.findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama"));
// console.log(assertEqual(index.findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined));

describe(`#findKeyByValue`, () => {
  it(`return 'drama' for (bestTVShowsByGenre, 'The Wire')`, () => {
    assert.strictEqual(index.findKeyByValue(bestTVShowsByGenre, 'The Wire'), 'drama');
  });
  it(`return undefined for (bestTVShowsByGenre, 'That 70s Show')`, () => {
    assert.strictEqual(index.findKeyByValue(bestTVShowsByGenre, 'That 70s Show'), undefined);
  });
});