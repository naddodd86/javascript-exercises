const add = function(a, b) {
  let sum = (a + b);
  return sum;
};

const subtract = function(a, b) {
	let diff = (a - b);
  return diff;
};

const sum = function(arr) {
	let arraySum = arr.reduce((a, b) => a + b, 0);
  return arraySum;

};

const multiply = function(arr) {
  const pro = arr.reduce((a, b) => a * b, 1);
  return pro;  
};
const power = function(a, b) {
  n = a ** b;
  return n;
};

const factorial = function(num) {
  if (num <= 0) {
    return 1;
  } else {
    let fact = 1;
    for (i = 1; i <= num; i++)  {
      fact *= i;
    }
    return fact;
  }
};
  

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
