const add = function(x, y) {
	return x+y;
};

const subtract = function(x, y) {
	return x-y;
};

const sum = function(...args) {
  const initialValue = 0;
  return args.flat().reduce((total, element) =>
    total + element, initialValue
  );
};

const multiply = function(...args) {
  const initialValue = 1;
  return args.flat().reduce((total, element) => 
  total * element, initialValue);
};

const power = function(x, y) {
	return Math.pow(x, y);
};

const factorial = function(x) {
  let total = 1;
	if(x === 0 || x === 1){
    return total;
  }
  let start = 1;
  while(start <= x){
    total *= start;
    start++;
  }
  return total;
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
