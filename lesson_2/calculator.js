// ask the user for the first number
// ask the user for the second number
// ask the user for the operation
// perform the operation
// display the result of the operation

const LANGUAGE = 'es';
const MESSAGES = require('./calculator_messages.json');
const readline = require('readline-sync');

function prompt(key) {
  const msg = messages(key, LANGUAGE);
  console.log(`=> ${msg}`);
}

function invalidNumber(num) {
  return num.trimStart() === '' || Number.isNaN(+num);
}

function messages(message, lang = 'en') {
  return MESSAGES[lang][message];
}

prompt('welcome');

while (true) {
  prompt('firstNum');
  let num1 = readline.question();

  while (invalidNumber(num1)) {
    prompt('invalidNum');
    num1 = readline.question();
  }

  prompt('secondNum');
  let num2 = readline.question();

  while (invalidNumber(num2)) {
    prompt('invalidNum');
    num2 = readline.question();
  }

  prompt('operation');
  let operation = readline.question();

  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt('invalidOperation');
    operation = readline.question();
  }

  let output;

  switch (operation) {
    case '1':
      output = +num1 + +num2;
      break;
    case '2':
      output = +num1 - +num2;
      break;
    case '3':
      output = +num1 * +num2;
      break;
    case '4':
      output = +num1 / +num2;
      break;
  }

  console.log(`=> ${messages('result', LANGUAGE)} ${output}.`);

  prompt('again');
  let response = readline.question();

  if (response !== 'y') break;
}
