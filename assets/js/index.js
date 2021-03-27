const firstNum = +prompt("Enter first number:") ;
const secondNum = +prompt("Enter second number:") ;
const number = +prompt("Enter number to check:")
let msg = "Equal num"

// 1) function Max

const maxValue = function (val1, val2) {
  if(isNaN(val1 - val2)) return null;
  if (val1 > val2) return val1;
  return val2;
}
console.log(maxValue(firstNum, secondNum));

// 2) function min

const minValue = function (val1, val2){
  if (isNaN(val1 - val2)) return null;
  if(val1 > val2) return val2;
  return val1;
}
console.log(minValue(firstNum, secondNum)) ;