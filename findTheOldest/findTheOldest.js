let findTheOldest = function (array) {
  for (let item of array) {
    if (item.hasOwnProperty("yearOfDeath")) {
      item.age = item.yearOfDeath - item.yearOfBirth;
    } else {
      item.age = new Date().getFullYear() - item.yearOfBirth;
    }
  }
  let oldest = 1;
  let name = {};
  for (let item of array) {
    if (item.age > oldest) {
      oldest = item.age;
      name = item;
    }
  }
  return name;
};

module.exports = findTheOldest;
