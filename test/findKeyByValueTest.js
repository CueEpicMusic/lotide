const { findKeyByValue } = require(`../index`);
const assert = require(`chai`).assert;
// const assertEqual = require(`../assertEqual`);

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
};

// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

describe(`#findKeyByValue`, () => {
  it(`return 'drama' for (bestTVShowsByGenre, 'The Wire')`, () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  });
  it(`return undefined for (bestTVShowsByGenre, 'That 70s Show')`, () => {
    assert.strictEqual(
      findKeyByValue(bestTVShowsByGenre, "That 70s Show"),
      undefined
    );
  });
});
