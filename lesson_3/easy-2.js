// let advice = "Few things in life are as important as house training your pet dinosaur.";
// const newAdvice = advice.replaceAll('important', 'urgent');
// console.log(newAdvice);

// let numbers = [1, 2, 3, 4, 5];
// numbers.reverse();
// console.log(numbers); // [ 5, 4, 3, 2, 1 ]

// numbers = [1, 2, 3, 4, 5];
// numbers.sort((num1, num2) => num2 - num1);
// console.log(numbers); // [ 5, 4, 3, 2, 1 ]

// let nums = [1, 2, 3, 4, 5];
// const numsCopyReversed = nums.slice().reverse();
// console.log(numsCopyReversed, nums);

// let nums2 = [1, 2, 3, 4, 5];
// const nums2CopyReversed = [...nums].sort((a, b) => b - a);
// console.log(nums2CopyReversed, nums2);

// const nums3 = [1, 2, 3, 4, 5];
// const reversedArr = [];

// nums3.forEach(n => {
//   reversedArr.unshift(n);
// })

// console.log(nums3, reversedArr);

// let numbers = [1, 2, 3, 4, 5, 15, 16, 17, 95, 96, 99];

// let number1 = 8;  // false
// let number2 = 95; // true

// console.log(numbers.includes(number1));
// console.log(numbers.includes(number2));

// let famousWords = "seven years ago...";
// let full = "Four score and " + famousWords;
// console.log(full);

// let full2 = `Four score and ${famousWords}`;
// console.log(full2);

// const full3 = 'Four score and '.concat(famousWords);
// console.log(full3);

// const nums = [1, 2, 3, 4, 5];
// nums.splice(2, 1);
// console.log(nums);

// let flintstones = ["Fred", "Wilma", ["Barney", "Betty"], ["Bambam", "Pebbles"]];
// // flintstones = flintstones.flat();
// // flintstones = [].concat(...flintstones);

// // flintstones = flintstones.reduce((acc, curr) => {
// //   return acc.concat(curr);
// // }, [])

// let flattened = [];
// flintstones.forEach(el => {
//   flattened = flattened.concat(el);
// });

// console.log(flattened);

// let flintstones = { Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4, Pebbles: 5 };

// // const arr = Object.entries(flintstones)[2];
// // console.log(arr);

// const arr = Object.entries(flintstones).filter(pair => pair[0] === "Barney");
// console.log(arr);

// let numbers = [1, 2, 3, 4]; // true
// let table = { field1: 1, field2: 2, field3: 3, field4: 4 }; // false

// console.log(Array.isArray(numbers));
// console.log(Array.isArray(table));

// let title = "Flintstone Family Members";
// console.log(title.length);

// const spaces = Math.floor((40 - title.length) / 2);
// console.log(spaces);
// titleSpaced = title.padStart(title.length + spaces, ' ')
// console.log(titleSpaced);

// let statement1 = "The Flintstones Rock!";
// let statement2 = "Easy come, easy go.";

// console.log(statement1.split('t').length - 1);
// console.log(statement2.split('t').length - 1);

// // console.log(("str1,str2,str3,str4".match(/,/g) || []).length);

// console.log((statement1.match(/t/g) || []).length);