const add = require('./add');
const subtract = require('./subtract');
const multiply = require('./multiply');
const divide = require('./divide.js');

const firstOperand = parseInt(process.argv[2]);
const operator = process.argv[3];
const secondOperand = parseInt(process.argv[4]);

if (operator === 'plus') {
  console.log('result:', add(firstOperand, secondOperand));
} else if (operator === 'minus') {
  console.log('result:', subtract(firstOperand, secondOperand));
} else if (operator === 'times') {
  console.log('result:', multiply(firstOperand, secondOperand));
} else if (operator === 'over') {
  console.log('result:', divide(firstOperand, secondOperand));
} else {
  console.log('Invalid input.');
}
