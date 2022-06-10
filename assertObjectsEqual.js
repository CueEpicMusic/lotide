const inspect = require("util").inspect;
const eqObjects = require("./eqObjects");

const assertObjectsEqual = function (actual, expected) {
  eqObjects(actual, expected)
    ? console.log(
        `✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`
      )
    : console.log(
        `🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`
      );
};

module.exports = assertObjectsEqual;
