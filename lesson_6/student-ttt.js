/* eslint-disable max-statements */
/* eslint-disable max-depth */
/* eslint-disable max-lines-per-function */
// Create a tic tac toe game

const readline = require('readline-sync');

const INITIAL_MARKER = ' ';
const HUMAN_MARKER = 'X';
const COMPUTER_MARKER = 'O';
const WHO_FIRST = ['player', 'computer', 'p', 'c'];
const CONTINUE_PLAYING = ['Y', 'y', 'N', 'n'];
const WINNING_TOTAL = 5;
const WINNING_LINES = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];

function prompt(message) {
  console.log(`=> ${message}`);
}

function displayBoard(board) {
  console.clear();

  console.log(`You are ${HUMAN_MARKER}. Computer is ${COMPUTER_MARKER}`);

  console.log('');
  console.log('     |     |');
  console.log(`  ${board['1']}  |  ${board['2']}  |  ${board['3']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['4']}  |  ${board['5']}  |  ${board['6']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['7']}  |  ${board['8']}  |  ${board['9']}`);
  console.log('     |     |');
  console.log('');
}

function initializeBoard() {
  let board = {};

  for (let square = 1; square <= 9; square++) {
    board[String(square)] = INITIAL_MARKER;
  }

  return board;
}

function emptySquares(board) {
  return Object.keys(board).filter((key) => board[key] === INITIAL_MARKER);
}

function joinOr(arr, delimiter = ', ', word = 'or') {
  switch (arr.length) {
    case 0:
      return '';
    case 1:
      return `${arr[0]}`;
    case 2:
      return arr.join(` ${word} `);
    default:
      return (
        arr.slice(0, arr.length - 1).join(delimiter) +
        `${delimiter}${word} ${arr[arr.length - 1]}`
      );
  }
}

function boardFull(board) {
  return emptySquares(board).length === 0;
}

function detectWinner(board) {
  for (let line = 0; line < WINNING_LINES.length; line++) {
    let [sq1, sq2, sq3] = WINNING_LINES[line];

    if (
      board[sq1] === HUMAN_MARKER &&
      board[sq2] === HUMAN_MARKER &&
      board[sq3] === HUMAN_MARKER
    ) {
      return 'Player';
    } else if (
      board[sq1] === COMPUTER_MARKER &&
      board[sq2] === COMPUTER_MARKER &&
      board[sq3] === COMPUTER_MARKER
    ) {
      return 'Computer';
    }
  }

  return null;
}

function someoneWon(board) {
  return !!detectWinner(board);
}

function playerChoosesSquare(board) {
  let square;

  while (true) {
    prompt(`Choose a square: ${joinOr(emptySquares(board))}`);
    square = readline.question().trim();

    if (emptySquares(board).includes(square)) break;

    prompt("Sorry, that's not a valid choice.");
  }

  board[square] = HUMAN_MARKER;
}

function computerChoosesSquare(board) {
  let square;

  for (let index = 0; index < WINNING_LINES.length; index++) {
    let line = WINNING_LINES[index];
    square = findAtRiskSquare(line, board, COMPUTER_MARKER);
    if (square) break;
  }

  if (!square) {
    for (let index = 0; index < WINNING_LINES.length; index++) {
      let line = WINNING_LINES[index];
      square = findAtRiskSquare(line, board, HUMAN_MARKER);
      if (square) break;
    }
  }

  if (board['5'] === INITIAL_MARKER) {
    square = 5;
  }

  if (!square) {
    let randomIndex = Math.floor(Math.random() * emptySquares(board).length);
    square = emptySquares(board)[randomIndex];
  }

  board[square] = COMPUTER_MARKER;
}

function displayWinTotal(player, computer) {
  console.log('**********************************');
  console.log('*  First to five wins the match  *');
  console.log('*                                *');
  console.log(`*       Player Wins:    ${player}        *`);
  console.log(`*       Computer Wins:  ${computer}        *`);
  console.log('*                                *');
  console.log('**********************************');
}

function findAtRiskSquare(line, board, marker) {
  let markersInLine = line.map((square) => board[square]);

  if (markersInLine.filter((val) => val === marker).length === 2) {
    let unusedSquare = line.find((square) => board[square] === INITIAL_MARKER);
    if (unusedSquare !== undefined) {
      return unusedSquare;
    }
  }

  return null;
}

function chooseSquare(board, player) {
  if (player === 'player') {
    playerChoosesSquare(board);
  }
  if (player === 'computer') {
    computerChoosesSquare(board);
  }
}

function alternatePlayer(player) {
  if (player === 'player') {
    return 'computer';
  } else {
    return 'player';
  }
}

while (true) {
  let playerWinTotal = 0;
  let computerWinTotal = 0;
  let currentPlayer = '';
  let first;
  let answer;

  while (true) {
    prompt("Who should go first? ('p' for player or 'c' for computer)");
    first = readline.question();

    if (WHO_FIRST.includes(first)) break;

    prompt("Sorry, that's not a valid choice.");
  }

  while (playerWinTotal < WINNING_TOTAL && computerWinTotal < WINNING_TOTAL) {
    let board = initializeBoard();
    currentPlayer = first;

    while (true) {
      displayBoard(board);
      displayWinTotal(playerWinTotal, computerWinTotal);
      chooseSquare(board, currentPlayer);
      currentPlayer = alternatePlayer(currentPlayer);

      if (boardFull(board)) {
        break;
      } else if (someoneWon(board)) {
        displayBoard(board);
        if (detectWinner(board) === 'Player') {
          playerWinTotal += 1;
          break;
        } else {
          computerWinTotal += 1;
          break;
        }
      }
    }
  }

  displayWinTotal(playerWinTotal, computerWinTotal);

  if (playerWinTotal === WINNING_TOTAL) {
    prompt('Player won the match!');
  } else if (computerWinTotal === WINNING_TOTAL) {
    prompt('Computer won the match!');
  }

  while (true) {
    prompt("Play again? ('y' or 'n')");
    answer = readline.question();

    if (CONTINUE_PLAYING.includes(answer)) break;

    prompt("Sorry, that's not a valid response.");
  }

  if (answer === 'n' || answer === 'N') {
    break;
  }
}

prompt('Thanks for playing Tic Tac Toe!');