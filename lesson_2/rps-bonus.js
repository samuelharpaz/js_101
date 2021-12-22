const readline = require('readline-sync');

const VALID_CHOICES = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
const ABBREVIATIONS  = ['r', 'p', 'sc', 'l', 'sp'];

function prompt(msg) {
  console.log(`=> ${msg}`);
};

function displayChoices() {
  return VALID_CHOICES.map((el, idx) => `${el} (${ABBREVIATIONS[idx]})`).join(', ');
};

function displayWinner(choice, computerChoice) {
  prompt(`You chose ${choice}, the computer chose ${computerChoice}`);

  if ((choice === 'rock' && ['scissors', 'lizard'].includes(computerChoice)) ||
      (choice === 'paper' && ['rock', 'spock'].includes(computerChoice)) ||
      (choice === 'scissors' && ['paper', 'lizard'].includes(computerChoice)) ||
      (choice === 'lizard' && ['spock', 'paper'].includes(computerChoice)) ||
      (choice === 'spock' && ['scissors', 'rock'].includes(computerChoice))) {
    prompt('You win!');
  } else if (choice === computerChoice) {
    prompt(`It's a tie`);
  } else {
    prompt(`Computer wins!`);
  }
};

while (true) {
  prompt(`Choose one: ${displayChoices()}`);
  let choice = readline.question().toLowerCase();

  while (!VALID_CHOICES.includes(choice) && !ABBREVIATIONS.includes(choice)) {
    prompt("That's not a valid choice. Please choose rock, paper, or scissors.");
    choice = readline.question();
  }

  if (ABBREVIATIONS.includes(choice)) {
    choice = VALID_CHOICES[ABBREVIATIONS.indexOf(choice)];
  }

  const randomIdx = Math.floor(Math.random() * VALID_CHOICES.length);
  const computerChoice = VALID_CHOICES[randomIdx];

  displayWinner(choice, computerChoice);

  prompt('Do you want to play again? (y/n)');
  let answer = readline.question().toLowerCase();

  while (answer[0] !== 'n' && answer[0] !== 'y') {
    prompt('Please enter "y" or "n".');
    answer = readline.question().toLowerCase();
  }

  if (answer[0] !== 'y') break;
}