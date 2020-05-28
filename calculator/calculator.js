function add(x, y) {
  return x + y;
}

function subtract(x, y) {
  return x - y;
}

function sum(array) {
  return array.reduce((current, total) => total + current, 0);
}

function multiply(array) {
  let result = 1;
  for (let i = 0; i < array.length; i++) {
    result = result * array[i];
  }
  return result;
}
function power(x, y) {
  return Math.pow(x, y);
}

function factorial(n) {
  if (n == 0) return 1;
  let result = 1;
  for (let i = n; i > 0; i--) {
    result *= i;
  }
  return result;
}

module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
