const rlSync = require('readline-sync');

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function isInvalidNumber(num) {
  return num.trim() === '' || +num < 0 || Number.isNaN(+num);
}

prompt('Welcome to the Mortgage Calculator!');

while (true) {
  // get input info from user
  prompt('Enter the loan amount:');
  let loanAmount = rlSync.question();

  while (isInvalidNumber(loanAmount)) {
    prompt('Must enter a positive number');
    loanAmount = rlSync.question();
  }

  prompt(
    'Enter the interest rate (annual percentage rate)\ne.g. for 5.5%, input 5.5:'
  );
  let apr = rlSync.question();

  while (isInvalidNumber(apr)) {
    prompt('Must enter a positive number');
    apr = rlSync.question();
  }

  prompt('Input the duration of the loan in years:');
  let durationYears = rlSync.question();

  while (isInvalidNumber(durationYears)) {
    prompt('Must enter a positive number');
    durationYears = rlSync.question();
  }

  // calculate based on user input
  const annualInterestRate = +apr / 100;
  const monthlyInterestRate = annualInterestRate / 12;
  const durationMonths = +durationYears * 12;

  // calculate monthly payment
  const monthlyPayment =
    +loanAmount *
    (monthlyInterestRate /
      (1 - Math.pow(1 + monthlyInterestRate, -durationMonths)));

  prompt(`Your monthly payment is $${monthlyPayment.toFixed(2)}`);

  console.log('---------------------------------------');
  prompt('Would you like to perform another calculation? (enter y or n)');
  let response = rlSync.question().toLowerCase();

  while (response !== 'y' && response !== 'n') {
    prompt('Please enter "y" for yes or "n" for no.');
    response = rlSync.question().toLowerCase();
  }

  if (response !== 'y') break;
}
