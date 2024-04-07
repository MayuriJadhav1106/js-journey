const prompt = require('prompt-sync')();
const base = prompt('Enter the base of a triangle: ');
const height = prompt('Enter the height of a triangle: ');

const area = (base * height) / 2;

console.log("The area of the triangle is: ",area);