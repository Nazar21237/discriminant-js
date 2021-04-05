const firstNum = +prompt("Enter first number:") ;
const secondNum = +prompt("Enter second number:") ;
const number = +prompt("Enter number to check:");

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

// 3) function check Even Numbers

const checkEvenNumbers = function (number){
  return number % 2 === 0;
}

function checkEven(){
  console.log("Max value is:", maxValue(firstNum, secondNum));
  console.log("Min value is:", minValue(firstNum, secondNum));
  if(checkEvenNumbers(num)) console.log(`${num} is even`)
  else console.log(`${num} is odd`);
}

// 4) discrim

function solve(a,b,c){
  if(!isNumber(a) || !isNumber(b) || !isNumber (c)){
    console.log("Wrong input");
    return null;
  }
  if (a === 0){
    console.log("a === 0. It`s mistake!");
    return null;
  }
  const D = discriminant(a,b,c);
  console.log(`discriminant = ${D}`);
  let result = 0;
  if(D < 0){
    console.log("No roots");
    result = null;
  }
  else if(D === 0){
    result = (-b + Math.sqrt(D)) / (2 * a);
  }
  else{
    const x1 = (-b + Math.sqrt(D)) / (2 * a);
    const x2 = (-b - Math.sqrt(D)) / (2 * a);
    result = [x1, x2]
  }
  return result;

}
function discriminant (a,b,c){
  return b ** 2 - (4 * a * c);
}

