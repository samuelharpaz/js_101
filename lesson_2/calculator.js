// ask the user for the first number
// ask the user for the second number
// ask the user for the operation
// perform the operation
// display the result of the operation

const readline = require('readline-sync');

console.log('Welcome to the Calculator!');

let num1 = +readline.question('What is the first number?\n');
let num2 = +readline.question('What is the second number?\n');
let operation = readline.question(
   'What operation would you like to perform?\n1) Add 2) Subtract 3) Multiply 4) Divide\n'
);

let result;

if (operation === '1') {
   result = num1 + num2;
} else if (operation === '2') {
   result = num1 - num2;
} else if (operation === '3') {
   result = num1 * num2;
} else if (operation === '4') {
   result = num1 / num2;
}

console.log(`The result is ${result}.`);
