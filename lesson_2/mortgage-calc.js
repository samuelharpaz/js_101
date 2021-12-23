const rlSync = require('readline-sync');

const MONTHS_IN_YEAR = 12;

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function isInvalidNumber(num) {
  return num.trim() === '' || Number.isNaN(+num);
}

function getLoanAmount() {
  prompt('Enter the loan amount (without commas or $. e.g. 100000)');
  let loanAmount = rlSync.question();

  while (isInvalidNumber(loanAmount) || +loanAmount <= 0) {
    prompt('Please enter a valid positive number');
    loanAmount = rlSync.question();
  }

  return loanAmount;
}

function getAPR() {
  prompt('Enter the interest rate (annual percentage rate)\ne.g. for 5.5%, input 5.5:');
  let apr = rlSync.question();

  while (isInvalidNumber(apr) || apr < 0) {
    prompt('Please enter either a valid positive number or 0');
    apr = rlSync.question();
  }

  return apr;
}

function getDurationYears() {
  prompt('What is the duration of the loan in years?');
  let durationYears = rlSync.question();

  while (
    isInvalidNumber(durationYears)
    || +durationYears <= 0
    || !Number.isInteger(+durationYears)
  ) {
    prompt('Please enter a positive integer');
    durationYears = rlSync.question();
  }

  return durationYears;
}

function getDurationMonths() {
  prompt('Input any additional months of loan duration: (enter 0 if not applicable)');
  let durationMonths = rlSync.question();

  while (
    isInvalidNumber(durationMonths)
    || +durationMonths < 0
    || !Number.isInteger(+durationMonths)
  ) {
    prompt('Please enter a positive integer (or 0 if not applicable)');
    durationMonths = rlSync.question();
  }

  return durationMonths;
}

function calcMonthlyPayment(loanAmount, apr, months) {
  const annualInterestRate = +apr / 100;
  const monthlyInterestRate = annualInterestRate / MONTHS_IN_YEAR;

  if (+apr === 0) {
    return +loanAmount / months;
  } else {
    return +loanAmount *
      (monthlyInterestRate / (1 - Math.pow(1 + monthlyInterestRate, -months)));
  }
}

function getRunAgainResponse() {
  console.log('---------------------------------------');
  prompt('Would you like to perform another loan calculation? (enter y or n)');
  let response = rlSync.question().toLowerCase();

  while (response !== 'y' && response !== 'n') {
    prompt('Please enter "y" for yes or "n" for no.');
    response = rlSync.question().toLowerCase();
  }

  return response;
}

console.clear();
prompt('Welcome to the Mortgage Calculator!');

while (true) {
  const loanAmount = getLoanAmount();
  const apr = getAPR();
  const durationYears = getDurationYears();
  const durationMonths = getDurationMonths();

  const totalMonths = (+durationYears * MONTHS_IN_YEAR) + +durationMonths;

  const monthlyPayment = calcMonthlyPayment(loanAmount, apr, totalMonths);
  prompt(`Your monthly payment would be $${monthlyPayment.toFixed(2)} for ${totalMonths} months`);

  const response = getRunAgainResponse();
  if (response !== 'y') break;
  console.clear();
}

prompt('Thanks for using the Mortgage Calculator!')
