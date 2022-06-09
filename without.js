const assertArraysEqual = require(`./assertArraysEqual`)

const without = function(source, itemsToRemove) {
  const result = []

  for(let num of source) {
    // if finds it return 1 if not -1
    const index = itemsToRemove.indexOf(num)
    if(index < 0) {

      result.push(num)
    }
  }
  return result
}

module.exports = without;

