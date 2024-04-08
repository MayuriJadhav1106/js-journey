const prompt = require('prompt-sync')();
const base = prompt('Enter the base : ');
const height = prompt('Enter the height: ');
const areaTriangle = (base * height) / 2;
const areaRectangle = base * height;

console.log("The area of the triangle is: ",areaTriangle);
console.log("The area of the rectangle is: ",areaRectangle);