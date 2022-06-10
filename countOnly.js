// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count

const countOnly = function(allItems, itemsToCount) {
  const results = {};

  //1. We go through all the items in the Allitems parameter
  for (const item of allItems) {

    //2. If the name has a true value in the second parameter
    if (itemsToCount[item] === true) {
      //3. To check whether the item is already there in the results object
      if (results[item]) { //if it's already there
        results[item] += 1;
      } else {
        results[item] = 1; //if the key was not there, then create it and assign 1 to it
      }
    }
  }
  return results;
};

module.exports = countOnly;
