const inspect = require('util').inspect;
const eqObjects = require('./eqObjects')

const assertObjectsEqual = function(actual, expected) {
  if (eqObjects(actual, expected)) {
    return `✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`
  }
  return `🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`
};

module.exports = assertObjectsEqual;