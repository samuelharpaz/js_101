// Given two numbers
// Add the numbers together
// return the sum

// START
// # Given two numbers as arguments
// SET sum = value of the two numbers added together
// PRINT sum
// END

// function add(a, b) {
//    if (typeof a !== 'number' || typeof b !== 'number') return;

//    const sum = a + b;
//    return sum;
// }

// console.log(add('yes', 7));

// 2.
// Given a collection of strings
// create an empty "resultString" variable
// iterate through the collection
//    for each iteration, add the current value to the resultString value
// return the resultString variable

// START
// # Given a collection of strings called "strings"
// SET result = empty string
// SET iterator = 0
// WHILE iterator < length of strings
//    SET currentValue = value within strings at position "iterator"
//    result = result + currentValue
//    iterator = iterator + 1
// PRINT result
// END

// const concatenateStrings = function (stringsArr) {
//    let result = '';

//    stringsArr.forEach(str => {
//       result += str;
//    });

//    return result;
// };

// console.log(concatenateStrings(['lemon', 'melon', 'yogurt']));

// 3.
// Given a collection of integers
// create an empty result array
// iterate over integers collection, incrementing by 2
//    add the value of the current element to the result array
// return the result array

// START
// # Given a collection of integers called integers
// SET everyOther = []
// SET iterator = 0
// WHILE iterator < length of integers
//    SET current = value of element in integers collection at position iterator
//    add current to everyOther array
//    iterator = iterator + 2
// PRINT everyOther
// END

function everyOther(integersArr) {
   const result = [];

   for (let i = 0; i < integersArr.length; i += 2) {
      result.push(integersArr[i]);
   }

   return result;
}

const arr1 = [3, 7, 12, 33];

console.log(everyOther(arr1));
