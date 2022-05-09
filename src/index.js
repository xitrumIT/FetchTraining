function sum(a = 0, b = 0) {
  return a + b;
}

function subtract(a = 0, b = 0) {
  return a - b;
}

function multi(a = 0, b = 1) {
  return a * b;
}

function divi(a = 0, b = 1) {
  return a / b;
}

const totalSum = sum(10, 1);
const totalSubtract = subtract(10, 1);
const totalMulti = multi(10, 2);
const totalDivi = divi(10, 5);

console.log("total sum: ", totalSum);
console.log("total subtract: ", totalSubtract);
console.log("total multi: ", totalMulti);
console.log("total divi: ", totalDivi);
console.log("Le Cong Nam submitted")
