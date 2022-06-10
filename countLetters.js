const countLetters = function (allItems) {
  const results = {};

  //1. We go through all the items in the allitems parameter
  for (const item of allItems) {
    if (item !== " ")
      if (results[item]) {
        //2. To check whether the Item is already there in the Results object
        //if it's already there
        results[item] += 1;
      } else {
        results[item] = 1; //if the key was not there, then create it and assign 1 to it
      }
  }
  return results;
};

module.exports = countLetters;
