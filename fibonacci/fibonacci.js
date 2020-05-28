const fibonacci = function (count) {
  if (count < 0) return "OOPS";
  let x = 0;
  let y = 1;
  for (let i = 1; i < count; i++) {
    const temp = y;
    y = x + y;
    x = temp;
  }
  return y;
};

module.exports = fibonacci;
