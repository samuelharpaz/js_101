// let numbers = [1, 2, 3];
// numbers[6] = 5;
// numbers[4];  // what will this line return?

// let str1 = "Come over here!"; // true
// let str2 = "What's up, Doc?"; // false

// console.log(str1.endsWith('!'));
// console.log(str2.indexOf('!') === str2.length - 1);

// let ages = { Herman: 32, Lily: 30, Grandpa: 402, Eddie: 10 };

// console.log(Object.keys(ages).includes('Eddie'));
// console.log(ages.hasOwnProperty('Spot'));

// let munstersDescription = "the Munsters are CREEPY and Spooky.";
// // => The munsters are creepy and spooky.

// const newStr = munstersDescription[0].toUpperCase() + munstersDescription.toLowerCase().slice(1);

// let ages = { Herman: 32, Lily: 30, Grandpa: 5843, Eddie: 10 };
// let additionalAges = { Marilyn: 22, Spot: 237 };

// Object.assign(ages, additionalAges);

// let str1 = "Few things in life are as important as house training your pet dinosaur.";
// let str2 = "Fred and Wilma have a pet dinosaur named Dino.";

// console.log(str1.includes('Dino'));
// console.log(str2.includes('Dino'));

// let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];
// // flintstones.push('Dino');
// flintstones.push('Dino', 'Hoppy');
// console.log(flintstones);

let advice = "Few things in life are as important as house training your pet dinosaur.";

// Expected return value:
// => 'Few things in life are as important as '

// const idx = advice.indexOf('house');
// const newStr = advice.slice(0, 39);

const newStr = advice.slice(0, advice.indexOf('house'));
console.log(newStr);