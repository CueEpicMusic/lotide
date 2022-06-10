const findKeyByValue = function (tvShowAndGenre, tvShow) {
  for (const genre in tvShowAndGenre) {
    if (tvShowAndGenre[genre] === tvShow) {
      return genre;
    }
  }
};

module.exports = findKeyByValue;
