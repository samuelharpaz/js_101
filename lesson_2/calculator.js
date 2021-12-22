const MESSAGES = require('./calculator_messages.json');
const LANGUAGE = 'en';

const readline = require('readline-sync');

function prompt(msg) {
  console.log(`=> ${getMsg(msg)}`);
}

function invalidNumber(num) {
  return num.trimStart() === '' || Number.isNaN(+num);
}

function getMsg(msg, lang = LANGUAGE) {
  return MESSAGES[lang][msg];
}

prompt('welcome');

while (true) {
  // get first number (and validate)
  prompt('firstNum');
  let num1 = readline.question();

  while (invalidNumber(num1)) {
    prompt('invalidNum');
    num1 = readline.question();
  }

  // get 2nd number (and validate)
  prompt('secondNum');
  let num2 = readline.question();

  while (invalidNumber(num2)) {
    prompt('invalidNum');
    num2 = readline.question();
  }

  // get requested operation (and validate)
  prompt('operation');
  let operation = readline.question();

  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt('invalidOperation');
    operation = readline.question();
  }


  // perform calculation
  let result;

  switch (operation) {
    case '1':
      result = +num1 + +num2;
      break;
    case '2':
      result = +num1 - +num2;
      break;
    case '3':
      result = +num1 * +num2;
      break;
    case '4':
      result = +num1 / +num2;
      break;
  }

  // display result to user
  prompt(`${'result'} ${result}`);

  prompt('again');
  const response = readline.question();

  if (response[0].toLowerCase() !== 'y') break;
}