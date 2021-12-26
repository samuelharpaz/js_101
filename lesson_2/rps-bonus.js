const readline = require('readline-sync');

const CHOICES = {
  rock: {
    abbrev: 'r',
    beats: ['scissors', 'lizard']
  },
  paper: {
    abbrev: 'p',
    beats: ['rock', 'spock']
  },
  scissors: {
    abbrev: 'sc',
    beats: ['paper', 'lizard']
  },
  lizard: {
    abbrev: 'l',
    beats: ['paper', 'spock']
  },
  spock: {
    abbrev: 'sp',
    beats: ['rock', 'scissors']
  }
};

const choicesFull = Object.keys(CHOICES);
const choicesAbbrev = Object.values(CHOICES).map(choice => choice.abbrev);
const NUM_ROUNDS = 5;


let userScore = 0;
let computerScore = 0;
let gameOver = false;

/////////////////////
// Functions
const prompt = function(msg) {
  console.log(`=> ${msg}`);
};

const logSpace = function(lines = 1) {
  for (let counter = 1; counter <= lines; counter++) {
    console.log('');
  }
};

const getUserChoice = function() {
  let choicesStr = 'Enter ';
  choicesAbbrev.forEach((el, idx) => {
    choicesStr += `"${el}" for ${choicesFull[idx]}, `;
  });
  choicesStr = choicesStr.slice(0, -2);

  prompt(`Choose one: ${choicesFull.join(', ')}\n(${choicesStr})`);
  let choice = readline.question().toLowerCase();

  while (!choicesAbbrev.includes(choice) && !choicesFull.includes(choice)) {
    prompt(`That's not a valid choice.\n${choicesStr}`);
    choice = readline.question().toLowerCase();
  }

  if (choicesAbbrev.includes(choice)) {
    const idx = choicesAbbrev.indexOf(choice);
    choice = choicesFull[idx];
  }

  return choice;
};

const getComputerChoice = function() {
  const randomIdx = Math.floor(Math.random() * choicesFull.length);
  return choicesFull[randomIdx];
};

const displayUserChoice = function(choice) {
  prompt(`You chose ${choice}.`);
};

const displayComputerChoice = function(computerChoice) {
  logSpace();
  prompt(`The computer chose ${computerChoice}.`);
};

const calcRoundWinner = function(choice, computerChoice) {
  if (CHOICES[choice].beats.includes(computerChoice)) {
    return 'user';
  } else if (choice === computerChoice) {
    return 'tie';
  } else return 'computer';
};

const updateScore = function(winner) {
  if (winner === 'user') {
    userScore += 1;
  } else if (winner === 'computer') {
    computerScore += 1;
  }
};

const displayRoundWinner = function(winner) {
  if (winner === 'user') {
    prompt('You win this round!');
  } else if (winner === 'computer') {
    prompt('Computer wins this round!');
  } else {
    prompt("This round is a tie");
  }
};

const displayScore = function() {
  console.log(`You: ${userScore} | Computer: ${computerScore}`);
  logSpace();
};

const checkGameWinner = function() {
  if (userScore >= NUM_ROUNDS) {
    prompt('You win!!!');
    gameOver = !gameOver;
  } else if (computerScore >= NUM_ROUNDS) {
    prompt('Computer wins! :(');
    gameOver = !gameOver;
  } else {
    prompt('Press Enter to play next round');
    readline.question();
  }
};

const getPlayAgain = function() {
  logSpace();
  prompt('Would you like to play again? (y/n)');
  let response = readline.question().toLowerCase();

  while (!['y', 'yes', 'n', 'no'].includes(response)) {
    prompt('Please enter "y" or "n"');
    response = readline.question().toLowerCase();
  }

  return response;
};

const welcome = function() {
  console.clear();

  prompt('Welcome to Rock Paper Scissors Lizard Spock!');
  prompt(`First to win ${NUM_ROUNDS} rounds wins the game`);
  console.log('-----------------------------------------');
  prompt('Press Enter to begin...');
  readline.question();
};

const resetGame = function() {
  gameOver = false;
  userScore = 0;
  computerScore = 0;
};

/////////////////////
// Game
welcome();

while (true) {
  while (!gameOver) {
    console.clear();
    displayScore();

    const choice = getUserChoice();
    const computerChoice = getComputerChoice();

    displayUserChoice(choice);
    displayComputerChoice(computerChoice);

    const roundWinner = calcRoundWinner(choice, computerChoice);

    updateScore(roundWinner);
    displayRoundWinner(roundWinner);

    logSpace();
    displayScore();

    checkGameWinner();
  }

  const response = getPlayAgain();

  if (response === 'n' || response === 'no') {
    prompt('Thanks for playing!');
    break;
  } else {
    resetGame();
  }
}