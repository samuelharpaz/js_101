const readline = require('readline-sync');

const VALID_CHOICES = ['rock', 'paper', 'scissors'];

const prompt = function(msg) {
  console.log(`=> ${msg}`);
};

const displayWinner = (choice, computerChoice) => {
  prompt(`You chose ${choice}, the computer chose ${computerChoice}`);

  if ((choice === 'rock' && computerChoice === 'scissors') ||
      (choice === 'paper' && computerChoice === 'rock') ||
      (choice === 'scissors' && computerChoice === 'paper')) {
    prompt('You win!');
  } else if ((choice === 'rock' && computerChoice === 'paper') ||
            (choice === 'paper' && computerChoice === 'scissors') ||
            (choice === 'scissors' && computerChoice === 'rock')) {
    prompt('Computer wins!');
  } else {
    prompt(`It's a tie.`);
  }
};

while (true) {
  prompt(`Choose one: ${VALID_CHOICES.join(', ')}`);
  let choice = readline.question();

  while (!VALID_CHOICES.includes(choice)) {
    prompt("That's not a valid choice. Please choose rock, paper, or scissors.");
    choice = readline.question();
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