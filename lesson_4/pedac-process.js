// 1. Create a 'rows' array to hold rows
// 2. Set 'counter' to start at 2
// 3. Loop from 1 up to the input integer:
//  - create a row inside rows
//  - WHILE 'row''s length is not equal to the number of the row
//    - add counter to row
//    - increment counter by 2
// Add digits in the final row/array
// Return sum

function sumEvenNumberRows(rowNum) {
  const rows = [];
  let counter = 2;

  for (let row = 1; row <= rowNum; row++) {
    rows.push([]);

    while (rows[row - 1].length !== row) {
      rows[row - 1].push(counter);
      counter += 2;
    }
  }

  return rows[rowNum - 1].reduce((acc, curr) => acc + curr, 0);
}

console.log(sumEvenNumberRows(1));
console.log(sumEvenNumberRows(2));
console.log(sumEvenNumberRows(4));


function createRow(startInt, length) {
  const row = [];
  let counter = startInt;

  while (row.length < length) {
    row.push(counter);
    counter += 2;
  }

  return row;
}

function sumEvenNumberRows2(rowNum) {
  const rows = [];
  let counter = 2;

  for (let row = 1; row <= rowNum; row++) {
    const newRow = createRow(counter, row);
    rows.push(newRow);

    // counter += 2 * row;
    counter = newRow[newRow.length - 1] + 2;
  }

  return rows[rowNum - 1].reduce((acc, curr) => acc + curr, 0);
}

console.log(sumEvenNumberRows2(1));
console.log(sumEvenNumberRows2(2));
console.log(sumEvenNumberRows2(4));
