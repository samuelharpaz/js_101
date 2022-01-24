// let arr = ['10', '11', '9', '7', '8'];

// arr.sort((a, b) => +b - +a);
// console.log(arr);

// 2.
// let books = [
//   { title: 'One Hundred Years of Solitude', author: 'Gabriel Garcia Marquez', published: '1967' },
//   { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', published: '1925' },
//   { title: 'War and Peace', author: 'Leo Tolstoy', published: '1869' },
//   { title: 'Ulysses', author: 'James Joyce', published: '1922' },
//   { title: 'The Book of Kells', author: 'Multiple Authors', published: '800' },
// ];

// books.sort((a, b) => +a.published - +b.published);
// // console.log(books);

// 3.
// let arr1 = ['a', 'b', ['c', ['d', 'e', 'f', 'g']]];
// // console.log(arr1[2][1][3]);

// let arr2 = [{ first: ['a', 'b', 'c'], second: ['d', 'e', 'f'] }, { third: ['g', 'h', 'i'] }];
// // console.log(arr2[1].third[0]);

// let arr3 = [['abc'], ['def'], { third: ['ghi'] }];
// // console.log(arr3[2].third[0][0]);

// let obj1 = { a: ['d', 'e'], b: ['f', 'g'], c: ['h', 'i'] };

// // console.log(obj1.b[1]);

// let obj2 = { first: { d: 3 }, second: { e: 2, f: 1 }, third: { g: 0 }}

// console.log(Object.keys(obj2.third)[0]);

// 4.
// let arr1 = [1, [2, 3], 4];
// arr1[1][1] = 4;
// console.log(arr1);

// let arr2 = [{ a: 1 }, { b: 2, c: [7, 6, 5], d: 4 }, 3];
// arr2[2] = 4;
// console.log(arr2);

// let obj1 = { first: [1, 2, [3]] };
// obj1.first[2][0] = 4;
// console.log(obj1);

// let obj2 = { a: { a: ['1', 'two', 3], b: 4 }, b: 5 };
// obj2.a.a[2] = 4;
// console.log(obj2);

// 5.
// let munsters = {
//   Herman: { age: 32, gender: 'male' },
//   Lily: { age: 30, gender: 'female' },
//   Grandpa: { age: 402, gender: 'male' },
//   Eddie: { age: 10, gender: 'male' },
//   Marilyn: { age: 23, gender: 'female'}
// };

// const totalAge = Object.values(munsters)
//   .filter(obj => obj.gender === 'male')
//   .reduce((sum, currEl) => sum + currEl.age, 0);

// console.log(totalAge);

// 6.
// let munsters = {
//   herman: { age: 32, gender: 'male' },
//   lily: { age: 30, gender: 'female' },
//   grandpa: { age: 402, gender: 'male' },
//   eddie: { age: 10, gender: 'male' },
//   marilyn: { age: 23, gender: 'female'}
// };

// for (let person in munsters) {
//   const { age, gender } = munsters[person];

//   console.log(`${person} is a ${age}-year-old ${gender}.`);
// }

// Object.entries(munsters).forEach(([name, { age, gender }]) => {

//   console.log(`${name} is a ${age}-year-old ${gender}.`);
// });

// 7.
// a => 2
// b => [3, 8]

// 8.
// let obj = {
//   first: ['the', 'quick'],
//   second: ['brown', 'fox'],
//   third: ['jumped'],
//   fourth: ['over', 'the', 'lazy', 'dog'],
// };

// const objValues = Object.values(obj);

// objValues.forEach(arr => {
//   arr.join('')
//     .split('')    
//     .forEach(char => {
//       if ('aeiou'.includes(char)) {
//         console.log(char);
//       }
//     })
  
// });

// 9.
// let arr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];

// const newArr = arr.map(subarray => {
//   if (typeof subarray[0] === 'number') {
//     return subarray.slice().sort((a, b) => a - b);
//   } else if (typeof subarray[0] === 'string') {
//     return subarray.slice().sort();
//   }
// });

// console.log(newArr);
// console.log(arr);

// 10.
// let arr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];

// const newArr = arr.map(subarray => {
//   return subarray.slice().sort((a, b) => {
//     if (typeof subarray[0] === 'number') {
//       return b- a;
//     }

//     if (a < b) {
//       return 1;
//     } else if (a > b) {
//       return -1;
//     } else {
//       return 0;
//     }
//   });
// });

// console.log(newArr);
// console.log(arr);

// 11.
// let arr = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];

// const newArr = arr.map(obj => {
//   const incrementedObj = {};

//   for (let key in obj) {
//     incrementedObj[key] = obj[key] + 1;
//   }

//   return incrementedObj;
// })

// console.log(newArr);
// console.log(arr);

// 12.
// let arr = [[2], [3, 5, 7], [9], [11, 15, 18]];

// const newArr = arr.map(subArr => {
//   return subArr.filter(num => num % 3 === 0);
// });

// console.log(newArr);

// 13.
// let arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];

// const getSumOfOdds = (sum, currNum) => {
//     if (currNum % 2 === 0) return sum;

//     return sum + currNum;
//   };

// const sortedArr = arr.sort((a, b) => {
//   return a.reduce(getSumOfOdds, 0) - b.reduce(getSumOfOdds, 0);
// });

// console.log(sortedArr);

// 14.
// let obj = {
//   grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
//   carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
//   apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
//   apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
//   marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
// };

// const result = Object.values(obj).map(({ type, colors, size }) => {
//   if (type === 'fruit') {
//     return colors.map(color => color[0].toUpperCase() + color.slice(1).toLowerCase());
//   } else if (type === 'vegetable') {
//     return size.toUpperCase();
//   }
// });

// console.log(result);

// 15.
// let arr = [
//   { a: [1, 2, 3] },
//   { b: [2, 4, 6], c: [3, 6], d: [4] },
//   { e: [8], f: [6, 10] },
// ];

// const filteredArr = arr.filter(obj => {
//   return Object.values(obj).every(subArr => {
//     return subArr.every(num => num % 2 === 0);
//   });
// });

// console.log(filteredArr);

// 16.
// let arr = [['a', 1], ['b', 'two'], ['sea', {'c': 3}], ['D', ['a', 'b', 'c']]];

// // Solution #1:
// // const objFromArr = Object.fromEntries(arr);
// // console.log(objFromArr);

// // Solution #2:
// const obj = {};

// arr.forEach(([key, value]) => {
//   obj[key] = value;
// });

// console.log(obj);

// 17.
const pick = arr => {
  return arr[Math.floor(Math.random() * arr.length)];
};

const getHexDigit = function() {
  const hexDigits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];
  return pick(hexDigits);
};

const getHexString = function(size) {
  let hexStr = '';

  for (let idx = 0; idx < size; idx++) {
    hexStr += getHexDigit();
  }

  return hexStr;
}

const getUUID = function() {  
  const sections = [8, 4, 4, 4, 12];

  let uuid = '';

  sections.forEach((section, idx) => {
    uuid += getHexString(section);

    uuid += idx < sections.length - 1 ? '-' : '';
  })

  return uuid;
};

console.log(getUUID());