const prompt = require('prompt-sync')();
const base = prompt('Enter the base : ');
const height = prompt('Enter the height: ');
const radius = prompt('Enter the radius: ')
const areaTriangle = (base * height) / 2;
const areaRectangle = base * height;
const areaCircle = 3.14 * (radius **2);

console.log("The area of the triangle is: ",areaTriangle);
console.log("The area of the rectangle is: ",areaRectangle);
console.log("The area of the circle is: ",areaCircle);