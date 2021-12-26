const readline = require('readline-sync');

const CHOICES = ['rock', 'paper', 'scissors'];

const prompt = function(msg) {
  console.log(`=> ${msg}`);
};

const displayWinner = function(choice, computerChoice) {
  if ((choice === 'rock' && computerChoice === 'scissors') ||
      (choice === 'paper' && computerChoice === 'rock') ||
      (choice === 'scissors' && computerChoice === 'paper')) {
    prompt('You win!');
  } else if ((choice === 'rock' && computerChoice === 'paper') ||
            (choice === 'paper' && computerChoice === 'scissors') ||
            (choice === 'scissors' && computerChoice === 'rock')) {
    prompt('Computer wins!');
  } else {
    prompt("It's a tie");
  }
};

const logSpace = function(lines = 1) {
  for (let i = 1; i <= lines; i++) {
    console.log('');
  }
};

console.clear();

prompt('Welcome to Rock, Paper, Scissors!');
console.log('-----------------------------------------');

while (true) {
  prompt(`Choose one: ${CHOICES.join(', ')}`);
  let choice = readline.question();

  while (!CHOICES.includes(choice)) {
    prompt("That's not a valid choice");
    choice = readline.question();
  }

  const randomIdx = Math.floor(Math.random() * CHOICES.length);
  const computerChoice = CHOICES[randomIdx];

  logSpace();
  prompt(`The computer chose ${computerChoice}`);

  displayWinner(choice, computerChoice);

  logSpace();
  prompt('Would you like to play again? (y/n)');
  let response = readline.question().toLowerCase();

  while (!['y', 'yes', 'n', 'no'].includes(response)) {
    prompt('Please enter "y" or "n"');
    response = readline.question().toLowerCase();
  }

  if (response === 'y' || response === 'yes') {
    console.clear();
  } else {
    prompt('Thanks for playing!');
    break;
  }
}