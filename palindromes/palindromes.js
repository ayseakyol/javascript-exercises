const palindromes = function (strng) {
  let newString = strng.toLowerCase().replace(/[^A-Za-z]/g, "");
  return newString.split("").reverse().join("") === newString;
};

module.exports = palindromes;
