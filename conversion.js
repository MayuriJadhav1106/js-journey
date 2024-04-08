const prompt = require('prompt-sync')();
const kilometers = prompt("Enter value in kilometers: ")


const factor = 2
const miles = kilometers * factor

console.log(`${kilometers} kilometers is equal to ${miles} miles.`);