const prompt = require('prompt-sync')();
const num1 = parseInt(prompt('Enter the first number '));
const num2 = parseInt(prompt('Enter the second number '));
const sum = num1 + num2;
const sub = num1 - num2;
const mul = num1 * num2;
const div = num1 / num2;

console.log('The sum of is: ',sum );
console.log('The subtraction of is: ',sub );
console.log('The multiplication of is: ',mul );
console.log('The division of is: ',div );