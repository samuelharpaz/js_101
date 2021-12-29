// let numbers = [1, 2, 3, 4];

// 1.
// numbers.length = 0;
// console.log(numbers);

// 2.
// numbers.forEach(() => {
//   numbers.pop();
// });
// console.log(numbers);

// 3.
// numbers.splice(0);
// console.log(numbers);

// '1, 2, 34, 5'

// 'hello there'

// [{ first: 42 }, { second: "value2" }, 3, 4, 5];

// function isColorValid(color) {
//   if (color === "blue" || color === "green") {
//     return true;
//   } else {
//     return false;
//   }
// }

// function isColorValid2(color) {
//   return color === "blue" || color === "green";
// }

// function isColorValid3(color) {
//   return ['blue', 'green'].includes(color);
// }

// const str = 'The Flintstones Rock!'
// const len = str.length;

// for (let i = 0; i < 10; i++) {
//   console.log(str.padStart(i + len, ' '));
// }

// let munstersDescription = "The Munsters are creepy and spooky.";
// let switched = '';

// for (let i = 0; i < munstersDescription.length; i++) {
//   if (munstersDescription[i] === munstersDescription[i].toLowerCase()) {
//     switched += munstersDescription[i].toUpperCase();
//   } else {
//     switched += munstersDescription[i].toLowerCase();
//   }
// }

// console.log(switched);

// function factors(number) {
//   let divisor = number;
//   let factors = [];
//   // do {
//   //   if (number % divisor === 0) {
//   //     factors.push(number / divisor);
//   //   }
//   //   divisor -= 1;
//   // } while (divisor !== 0);

//   while (divisor > 0) {
//     if (number % divisor === 0) {
//       factors.push(number / divisor);
//     }

//     divisor -= 1;
//   }

//   return factors;
// }

// console.log(factors(10));
// console.log(factors(16));
// console.log(factors(-8));

// const jake = {
//   position: 'pitcher',
//   age: 32,
//   nicknames: ['jakey', 'jakob']
// };

// const arr = Object.values(jake);
// arr[2].push('snakey');
// console.log(jake);
