[[1, 2], [3, 4]].map(arr => {
  console.log(arr[0]);
  return arr[0];
});

// 1
// 3
// [1, 3]

// action                       Performed on        Side Effect           Return Value                      Is Return Value Used?
// method call (map)            outer array         none                  New array ([1, 3])                no, but shown on line 4
// callback execution           each inner array    console.log etc.      arr[0]                            Yes, used by map to create transformation
// element access               element at index 0  none                  value of element at index 0       Yes, used by console.log
//                              of each subarray    
// method call (console.log)    el at index 0       outputs string rep    undefined                         no


// example 4

// 18
// 7
// 12
// myArr = undefined;

/*
1. variable decl/assignment
  - perf on: n/a
  - side effect: none
  - ret value: undefined
  - ret val used: no
2. method call (forEach)
  - performed on: outer array
  - side effect: none
  - return value: undefined
  - return val used: yes, used to initialize value of myArr variable
3. callback execution (of forEach)
  - performed on: each subarray
  - side effect: none
  - return value: [undefined, undefined]
  - ret value used: no
4. method call (map)
  - perf on: each subarray
  - side effect: none
  - return val: [undefined, undefined]
  - ret val used: explicitly returned by forEach cb fn
5. callback exec of map
  - perf on: each number within subarray
  - side effect: none
  - ret value: undefined
  - ret val used: yes, used to define the map's transformation
6. element comparison
  - perf on: each num within subarray
  - side effect: none
  - ret value: boolean
  - ret val used: yes, in if statement
7. method call (console.log)
  - perf on: each num within subarray that passed if statement's condition
  - side effect: outputs a string representation of a Number
  - ret value: undefined
  - ret val used: yes, explicitly returned from callback execution


Example 5:
// [[2, 4], [6,8]]

1. method call (map)
  - perf on: outer array
  - side effect: none
  - ret val: [[2, 4], [6, 8]]
  - ret val used: no
2. outer callback exec
  - perf on: each subarray
  - side effect: none
  - ret val: a. [2, 4] b. [6,8] so: the return value is the return value from the inner map method call, which returns an array with the orig subarray's elements doubled
  - ret val used: yes, used to define the outer map's transformation
3. method call (map) - inner
  - perf on: each subarray
  - side effect: none
  - ret val: new array with each element of subarray doubled
  - ret val used: yes, explicitly used as return value for outer callback execution
4. inner callback exec
  - perf on: each element of subarray
  - side effect: none
  - ret val: value of element * 2
  - ret val used: yes, used to determine inner map's transformation
5. num * 2
  - perf on: each el of subarray
  - side effect: none
  - ret val: a number
  - ret val used: yes, it is explicitly returned from the callback


Example 6:

*/

// Example 9
[[[2, 3], [4, 5]], [6, 7]]