const getTheTitles = function (array) {
  let newArray = [];
  for (let item of array) {
    newArray.push(item.title);
  }
  return newArray;
};

module.exports = getTheTitles;
