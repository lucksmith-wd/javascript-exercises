const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (nums) {
  let sum = 0;
  for (const num of nums) {
    sum += num;
  }
  return sum;
};

const multiply = function (nums) {
  let product = 1;
  for (const num of nums) {
    product *= num;
  }
  return nums.length ? product : 0;

  // TOP solution
  // return nums.length ? nums.reduce((a, b) => a * b) : 0;
};

const power = function (num, exponent) {
  return Math.pow(num, exponent);
};

const factorial = function (n) {
  if (n === 0) return 1;
  let factorial = n--;
  while (n > 1) {
    factorial *= n--;
  }
  return factorial;
};

console.log(factorial(10));

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
