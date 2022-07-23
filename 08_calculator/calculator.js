const add = function(num1, num2) {
  return num1+num2;
};

const subtract = function(num1, num2) {
	return num1-num2;
};

const sum = function(arr) {
	const sum = arr.reduce((sum, num) => sum+num, 0);
  return sum;
};

const multiply = function(arr) {
  if (!arr.length()) {
    return 0;
  }
  return arr.reduce((product, num) => product*num, 1);
};


const power = function(num, power) {
    return num**power;
};

const factorial = function(num) {
	if (num === 0 || num === 1) {
    return 1;
  }
  
  let ans=1;
  for (let i = num; i >0; i--) {
    ans *= i;    
  }
  return ans;

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
