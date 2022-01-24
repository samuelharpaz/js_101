const readline = require('readline-sync');

const GAME_WINS_PER_MATCH = 5;
const INITIAL_MARKER = ' ';
const HUMAN_MARKER = 'X';
const COMPUTER_MARKER = 'O';
const MIDDLE_SQUARE = '5';
const PLAYS_FIRST = 'choose';
const HORIZONTAL_SPACE = 13;

const WINNING_ROWS = [
  ['1', '2', '3'], ['4', '5', '6'], ['7', '8', '9'], // rows
  ['1', '4', '7'], ['2', '5', '8'], ['3', '6', '9'], // columns
  ['1', '5', '9'], ['3', '5', '7'] // diagonals
];

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function addVerticalSpace(num = 1) {
  for (let count = 1; count <= num; count++) {
    console.log('');
  }
}

function logWithSpace(text, spaceLength) {
  console.log(`${''.padStart(spaceLength)}${text}`);
}

function joinOr(arr, connector = ', ', last = 'or') {
  if (arr.length <= 1) return arr.join();

  const allButLast = arr.slice(0, -1);
  return `${allButLast.join(connector)}${connector}${last} ${arr[arr.length - 1]}`;
}


function displayBoard(board) {
  logWithSpace('', HORIZONTAL_SPACE);
  logWithSpace('     |     |', HORIZONTAL_SPACE);
  logWithSpace(`  ${board['1']}  |  ${board['2']}  |  ${board['3']}`, HORIZONTAL_SPACE);
  logWithSpace('     |     |', HORIZONTAL_SPACE);
  logWithSpace('-----+-----+-----', HORIZONTAL_SPACE);
  logWithSpace('     |     |', HORIZONTAL_SPACE);
  logWithSpace(`  ${board['4']}  |  ${board['5']}  |  ${board['6']}`, HORIZONTAL_SPACE);
  logWithSpace('     |     |', HORIZONTAL_SPACE);
  logWithSpace('-----+-----+-----', HORIZONTAL_SPACE);
  logWithSpace('     |     |', HORIZONTAL_SPACE);
  logWithSpace(`  ${board['7']}  |  ${board['8']}  |  ${board['9']}`, HORIZONTAL_SPACE);
  logWithSpace('     |     |', HORIZONTAL_SPACE);
  logWithSpace('', HORIZONTAL_SPACE);
}

function initializeBoard() {
  const board = {};

  for (let square = 1; square <= 9; square++) {
    board[String(square)] = INITIAL_MARKER;
  }

  return board;
}

function emptySquares(board) {
  return Object.keys(board).filter(key => {
    return board[key] === INITIAL_MARKER;
  });
}

function playerChoosesSquare(board) {
  let square;

  while (true) {
    prompt(`Choose a square (${joinOr(emptySquares(board))}):`);
    square = readline.question().trim();
    if (emptySquares(board).includes(square)) break;

    prompt("Sorry, that's not a valid choice.");
  }

  board[square] = HUMAN_MARKER;
}

function strategicSquare(board, strategyType) {
  let square;
  for (let idx = 0; idx < WINNING_ROWS.length; idx++) {
    const row = WINNING_ROWS[idx];
    let marker = strategyType === 'offense' ? COMPUTER_MARKER : HUMAN_MARKER;

    square = findAtRiskSquare(row, board, marker);
    if (square) break;
  }

  return square;
}

function chooseMiddleSquare(board) {
  board[MIDDLE_SQUARE] = COMPUTER_MARKER;
}

function chooseRandomSquare(board) {
  const idx = Math.floor(Math.random() * emptySquares(board).length);
  board[emptySquares(board)[idx]] = COMPUTER_MARKER;
}

function computerChoosesSquare(board) {
  let square;
  square = strategicSquare(board, 'offense');

  if (!square) {
    square = strategicSquare(board, 'defense');
  }

  if (!square) {
    if (board[MIDDLE_SQUARE] === INITIAL_MARKER) {
      chooseMiddleSquare(board);
    } else {
      chooseRandomSquare(board);
    }
  } else {
    board[square] = COMPUTER_MARKER;
  }
}

function boardFull(board) {
  return emptySquares(board).length === 0;
}

function checkSqPlayer(sq, board) {
  return board[sq] === HUMAN_MARKER;
}

function checkSqComp(sq, board) {
  return board[sq] === COMPUTER_MARKER;
}

function someoneWon(board) {
  return !!detectWinner(board);
}

function detectWinner(board) {
  if (WINNING_ROWS.some(row => row.every(sq => checkSqPlayer(sq, board)))) {
    return 'Player';
  } else if (
    WINNING_ROWS.some(row => row.every(sq => checkSqComp(sq, board)))
  ) {
    return 'Computer';
  } else {
    return null;
  }
}

function processRoundWin(board, scores) {
  const winner = detectWinner(board);
  prompt(`${winner} won the round!`);
  addVerticalSpace();
  incrementScores(scores, winner);
}

function findAtRiskSquare(row, board, marker) {
  const markersInRow = row.map(sq => board[sq]);

  if (markersInRow.filter(val => val === marker).length === 2) {
    const unmarkedSquare = row.find(sq => board[sq] === INITIAL_MARKER);
    if (unmarkedSquare !== undefined) {
      return unmarkedSquare;
    }
  }

  return null;
}

function getFirstPlayer() {
  let first;
  if (PLAYS_FIRST === 'choose') {
    addVerticalSpace();
    prompt('Choose who you would like to go first: player(p) or computer(c):');
    first = readline.question().trim().toLowerCase();

    while (!['p', 'c', 'player', 'computer'].includes(first)) {
      prompt("Invalid response. Please choose player or computer:");
      first = readline.question().trim().toLowerCase();
    }

    if (first === 'p') {
      first = 'player';
    } else if (first ===  'c') {
      first = 'computer';
    }
  } else {
    first = PLAYS_FIRST;
  }

  return first;
}

function chooseSquare(board, currentPlayer) {
  if (currentPlayer === 'player') {
    playerChoosesSquare(board);
  } else if (currentPlayer === 'computer') {
    computerChoosesSquare(board);
  }
}

function alternatePlayer(current) {
  return current === 'player' ? 'computer' : 'player';
}

function playAgain() {
  prompt('Would you like to play again? (y/n)');
  let response = readline.question().trim().toLowerCase();

  while (!['y', 'n'].includes(response)) {
    prompt("That's not a valid response. Please type y or n");
    response = readline.question().trim().toLowerCase();
  }

  return response;
}

function detectMatchWinner({ player, computer }) {
  if (player >= GAME_WINS_PER_MATCH) {
    return 'Player';
  } else if (computer >= GAME_WINS_PER_MATCH) {
    return 'Computer';
  } else {
    return null;
  }
}

function processMatchWin(scores) {
  displayScores(scores);
  prompt(`${detectMatchWinner(scores)} won the match!!!`);
  addVerticalSpace();
}

function someoneWonMatch(scores) {
  return !!detectMatchWinner(scores);
}

function displayScores({ player, computer }, withBorder = false) {
  if (withBorder) {
    console.clear();

    console.log(`|         (First to ${GAME_WINS_PER_MATCH} points wins)        |`);
    console.log('|                                         |');
    console.log(`|    Player (X): ${player}  |  Computer (O): ${computer}    |`);
    console.log('*******************************************');
    addVerticalSpace();
  } else {
    console.log(`Player (X): ${player}  |  Computer (O): ${computer}`);
  }
}

function initializeScores() {
  return {
    player: 0,
    computer: 0
  };
}

function incrementScores(scores, winner) {
  if (winner === 'Player') {
    scores.player += 1;
  } else {
    scores.computer += 1;
  }
}

function welcomeMsg() {
  console.clear();
  prompt('Welcome to Tic Tac Toe!');
  prompt(`First to win ${GAME_WINS_PER_MATCH} rounds wins match.`);
  addVerticalSpace();
  readline.question('Press Enter/Return to continue...');
}

function promptNextRound() {
  prompt('Press Enter/Return to play next round...');
  readline.question();
}

welcomeMsg();

while (true) {
  console.clear();
  let firstPlayer = getFirstPlayer();
  const scores = initializeScores();

  while (true) {
    let currentPlayer = firstPlayer;
    const board = initializeBoard();

    while (true) {
      displayScores(scores, true);
      displayBoard(board);
      addVerticalSpace();

      chooseSquare(board, currentPlayer);
      if (someoneWon(board) || boardFull(board)) break;

      currentPlayer = alternatePlayer(currentPlayer);
    }

    console.clear();
    displayBoard(board);

    if (someoneWon(board)) {
      processRoundWin(board, scores);

      if (someoneWonMatch(scores)) {
        processMatchWin(scores);
        break;
      }
    } else {
      prompt(`It's a tie!`);
      addVerticalSpace();
    }

    displayScores(scores);
    addVerticalSpace();

    firstPlayer = alternatePlayer(firstPlayer);

    promptNextRound();
  }

  let response = playAgain();
  if (response !== 'y') break;
}

prompt('Thanks for playing Tic Tac Toe!');