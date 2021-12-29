// 8.
let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];

const convertArrToObj = arr => {
  const obj = {};

  arr.forEach((el, idx) => {
    obj[el] = idx; // TODO: convert to number type
  });

  return obj;
};

const flintstonesObj = convertArrToObj(flintstones);
// console.log(flintstonesObj);

// 9.
// let ages = {
//   Herman: 32,
//   Lily: 30,
//   Grandpa: 5843,
//   Eddie: 10,
//   Marilyn: 22,
//   Spot: 237
// };

// const ageValues = Object.values(ages);
// const ageTotal = ageValues.reduce((total, currAge) => total + currAge, 0);
// console.log(ageTotal);

// 10. minimum age
// let ages = {
//   Herman: 32,
//   Lily: 30,
//   Grandpa: 5843,
//   Eddie: 10,
//   Marilyn: 22,
//   Spot: 237
// };

// const ageValues = Object.values(ages);
// // Method 1: Math.min
// // const minimum = Math.min(...ageValues);
// // console.log(minimum);

// // Method 2: reduce
// const minAge = ageValues.reduce((min, currAge) => {
//   if (currAge < min) {
//     return currAge;
//   } else {
//     return min;
//   }
// });

// console.log(minAge);

// 11.
// Input: str
// Output: object
//  - keys: each unique character in the str
//  - values: number of times each character appears in the string
// Rules:
// - spaces should not count

let statement = "The Flintstones Rock";

const charMapObj = statement
  .split('')
  .filter(char => char !== ' ')
  .reduce((obj, char) => {
    obj[char] = (obj[char] || 0) + 1;
    return obj;
}, {});

// console.log(charMapObj);

let arr = [1, 2, 3, 4, 5, 6, 7];
// arr.forEach(elem => {
//   if (elem < 3) {
//     arr.push(100);
//   }
//   console.log(elem);
// });

arr.forEach(elem => {
  arr.splice(0, 1);
  console.log(elem);
});
