function selectFruit(obj) {
  const fruit = {};
  const keys = Object.keys(obj);

  for (let counter = 0; counter < keys.length; counter++) {
    const currentKey = keys[counter];

    if (obj[currentKey] === 'Fruit') {
      fruit[currentKey] = obj[currentKey];
    }
  }

  return fruit
}

let produce = {
  apple: 'Fruit',
  carrot: 'Vegetable',
  pear: 'Fruit',
  broccoli: 'Vegetable'
};

// console.log(selectFruit(produce)); // => { apple: 'Fruit', pear: 'Fruit' }

function doubleNumbers(numbers) {
  let doubledNums = [];
  let counter = 0;

  while (counter < numbers.length) {
    let currentNum = numbers[counter];
    doubledNums.push(currentNum * 2);

    counter += 1;
  }

  return doubledNums;
}

function doubleNumsMutate(numbers) {
  let counter = 0;

  while (counter < numbers.length) {
    numbers[counter] *= 2;

    counter += 1;
  }

  return numbers;
}

let nums = [1, 2, 3, 4, 5];

doubleNumsMutate(nums);
// console.log(nums);

const doubleOddIndices = function(nums) {
  const doubledNums = [];

  for (let counter = 0; counter < nums.length; counter++) {
    const currentNum = nums[counter];

    if (counter % 2 === 1) {
      doubledNums.push(currentNum * 2);
    } else {
      doubledNums.push(currentNum);
    }
  }

  return doubledNums;
};

let myNumbers = [1, 4, 3, 7, 2, 6];

// console.log(doubleOddIndices(myNumbers));

function multiply(nums, multiplier) {
  const multiplied = [];

  for (let counter = 0; counter < nums.length; counter++) {
    const currNum = nums[counter];

    multiplied.push(currNum * multiplier);
  }

  return multiplied;
}

let nums2 = [1, 4, 3, 7, 2, 6];
multiply(nums2, 3); // => [3, 12, 9, 21, 6, 18]
console.log(multiply(nums2, 5));