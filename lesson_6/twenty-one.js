const readline = require('readline-sync');

const MAX_SCORE = 21;
const GAME_NAME = 'Twenty-One';
const DEALER_CUTOFF = 17;
const WINS_PER_MATCH = 5;
const RANKS = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
const SUITS = ['H', 'D', 'C', 'S'];

////////////////////
// Functions
function prompt(msg) {
  console.log(`=> ${msg}`);
}

function addVerticalSpace(amount = 1) {
  for (let count = 1; count <= amount; count++) {
    console.log('');
  }
}

function clear() {
  console.clear();
}

function getDeck() {
  const deck = [];
  SUITS.forEach(suit => {
    RANKS.forEach(rank => {
      deck.push({suit, rank});
    });
  });

  return deck;
}

function shuffle(deck) {
  for (let index = deck.length - 1; index > 0; index--) {
    let otherIndex = Math.floor(Math.random() * (index + 1)); // 0 to index
    [deck[index], deck[otherIndex]] = [deck[otherIndex], deck[index]]; // swap elements
  }

  return deck;
}

function initializeDeck() {
  return shuffle(getDeck());
}

function dealCard(deck) {
  return deck.pop();
}

function dealCards(deck, num) {
  const cards = [];
  for (let count = 1; count <= num; count++) {
    cards.push(dealCard(deck));
  }

  return cards;
}

function getCardName({suit, rank}) {
  const suitsKey = {H: '\u2665', C: '\u2663', D: '\u2666', S: '\u2660'};
  const suitSymbol = suitsKey[suit];

  return `${rank}${suitSymbol}`;
}

function displayInitialCards(dealer, player, playerTotal) {
  console.log(`Dealer has: ${getCardName(dealer[1])} and ?`);
  console.log(`You have: ${getCardName(player[0])} and ${getCardName(player[1])} (Current total: ${playerTotal})`);
}

function busted(total) {
  return total > MAX_SCORE;
}

function calcTotal(cards) {
  const values = cards.map(card => card.rank);

  let sum = 0;
  values.forEach(val => {
    if (val === 'A') {
      sum += 11;
    } else if (['J', 'Q', 'K'].includes(val)) {
      sum += 10;
    } else {
      sum += +val;
    }
  });

  sum = adjustAces(values, sum);

  return sum;
}

function adjustAces(values, sum) {
  values.filter(val => val === 'A').forEach(_ => {
    if (sum > MAX_SCORE) sum -= 10;
  });

  return sum;
}

function displayNewCard(card) {
  console.log(`New card: ${getCardName(card)}`);
}

function addNewCard(deck, cards) {
  const card = dealCard(deck);
  cards.push(card);
  displayNewCard(card);
}

function displayCurrent(cards, total, name) {
  const prefix = name === 'player' ? 'Your' : "Dealer's";

  console.log(`${prefix} cards are now: ${hand(cards)} (Current total: ${total})`);
  addVerticalSpace();
}

function promptHitStay() {
  prompt('Would you like to hit (h) or stay (s)?');
  let response = readline.question().trim().toLowerCase();

  while (!['h', 's'].includes(response)) {
    prompt("Oops, that's not a valid response. Please enter h for hit or s for stay:");
    response = readline.question().trim().toLowerCase();
  }

  return response;
}

function calcWinner(dealerTotal, playerTotal) {
  if (playerTotal > MAX_SCORE) {
    return 'PLAYER_BUSTED';
  } else if (dealerTotal > MAX_SCORE) {
    return 'DEALER_BUSTED';
  } else if (playerTotal > dealerTotal) {
    return 'PLAYER';
  } else if (playerTotal < dealerTotal) {
    return 'DEALER';
  } else {
    return 'DRAW';
  }
}

function getResultPrompt(dealerTotal, playerTotal) {
  const result = calcWinner(dealerTotal, playerTotal);

  switch (result) {
    case 'PLAYER_BUSTED':
      return 'You busted. Dealer wins the round!';
    case 'DEALER_BUSTED':
      return 'Dealer busted. You win the round!';
    case 'PLAYER':
      return 'You win the round!';
    case 'DEALER':
      return 'Dealer wins the round!';
    case 'DRAW':
      return "This round is a draw.";
    default:
      return '';
  }
}

function displayResults(dealerCards, dealerTotal, playerCards, playerTotal) {
  console.log('------------------------------------');
  addVerticalSpace();
  prompt(getResultPrompt(dealerTotal, playerTotal));

  addVerticalSpace();
  console.log('Totals:');
  addVerticalSpace();
  console.log(`Dealer: ${dealerTotal} (${hand(dealerCards)})`);
  console.log(`Player: ${playerTotal} (${hand(playerCards)})`);
  addVerticalSpace();
}

function hand(cards) {
  return cards.map(card => getCardName(card)).join(', ');
}

function playAgain() {
  console.log('Would you like to play again? (y/n)');
  let response = readline.question().trim().toLowerCase();

  while (!['yes', 'y', 'no', 'n'].includes(response)) {
    prompt('Invalid response. Please enter y for yes, or n for no');
    response = readline.question().trim().toLowerCase();
  }

  return ['y', 'yes'].includes(response);
}

function initializeScores() {
  return {
    player: 0,
    dealer: 0
  };
}

function incrementScores(scores, winner) {
  if (['PLAYER', 'DEALER_BUSTED'].includes(winner)) {
    scores.player += 1;
  } else if (['DEALER', 'PLAYER_BUSTED'].includes(winner)) {
    scores.dealer += 1;
  }
}

function displayScores({ player, dealer }, round, withBorder = false) {
  if (withBorder) {
    console.clear();
    console.log('----------------------------------------------');
    console.log(`Player: ${player} | Dealer: ${dealer}  (First to win ${WINS_PER_MATCH} rounds)`);
    console.log(`Round: ${round}`);
    console.log('----------------------------------------------');
  } else {
    console.log(`Player: ${player}  |  Dealer: ${dealer}`);
    addVerticalSpace();
  }
}

function displayKey() {
  console.log(`Key: J = Jack | Q = Queen | K = King | A = Ace`);
}

function detectMatchWinner({ player, dealer }) {
  if (player >= WINS_PER_MATCH) {
    return 'Player';
  } else if (dealer >= WINS_PER_MATCH) {
    return 'Dealer';
  } else {
    return null;
  }
}

function someoneWonMatch(scores) {
  return !!detectMatchWinner(scores);
}

function displayMatchResults(scores) {
  const winner = detectMatchWinner(scores);

  console.log('************************************');
  let resultStr = winner === 'Player' ? 'You win' : 'Dealer wins';
  resultStr += ' the match!!!';
  const emoji = winner === 'Player' ? '😎' : '😥';
  console.log(`${resultStr} ${emoji}`);
  addVerticalSpace();
}

function promptNextRound() {
  prompt('Press Enter to proceed to next round...');
  readline.question();
}

function welcomeMsg() {
  clear();
  prompt(`Welcome to ${GAME_NAME}!`);
  prompt('Press Enter to continue...');
  readline.question();
}

function newMatchMsg() {
  clear();
  prompt(`Get ready for a new match. First to win ${WINS_PER_MATCH} rounds wins match.`);
  prompt('Press Enter to begin...');
  readline.question();
}

////////////////////
// Game
welcomeMsg();

while (true) { // match
  const scores = initializeScores();
  let round = 1;
  newMatchMsg();

  while (true) { // round
    clear();
    displayScores(scores, round, true);
    displayKey();
    addVerticalSpace(2);

    const deck = initializeDeck();
    const playerCards = dealCards(deck, 2);
    const dealerCards = dealCards(deck, 2);

    let playerTotal = calcTotal(playerCards);
    let dealerTotal = calcTotal(dealerCards);

    displayInitialCards(dealerCards, playerCards, playerTotal);
    addVerticalSpace();

    // player turn
    while (true) {
      let response = promptHitStay();
      if (response === 's') break;

      prompt('You chose to hit.');
      addNewCard(deck, playerCards);
      playerTotal = calcTotal(playerCards);
      displayCurrent(playerCards, playerTotal, 'player');

      if (busted(playerTotal)) break;
    }

    if (busted(playerTotal)) {
      displayResults(dealerCards, dealerTotal, playerCards, playerTotal);

      const roundWinner = calcWinner(dealerTotal, playerTotal);
      incrementScores(scores, roundWinner);
      displayScores(scores);

      if (someoneWonMatch(scores)) {
        displayMatchResults(scores);
        break;
      } else {
        round += 1;
        promptNextRound();
        continue;
      }
    }

    prompt(`You chose to stay at ${playerTotal}`);
    addVerticalSpace();

    prompt('Dealer turn:');
    console.log(`Dealer's cards are: ${hand(dealerCards)} (Current total: ${dealerTotal})`);

    // dealer turn
    while (calcTotal(dealerCards) < DEALER_CUTOFF) {
      addVerticalSpace();
      prompt('Dealer hits');
      addNewCard(deck, dealerCards);
      dealerTotal = calcTotal(dealerCards);
      displayCurrent(dealerCards, dealerTotal, 'dealer');
    }

    addVerticalSpace();
    displayResults(dealerCards, dealerTotal, playerCards, playerTotal);

    const roundWinner = calcWinner(dealerTotal, playerTotal);
    incrementScores(scores, roundWinner);
    displayScores(scores);

    if (someoneWonMatch(scores)) {
      displayMatchResults(scores);
      break;
    }

    round += 1;
    addVerticalSpace();
    promptNextRound();
  }

  if (!playAgain()) break;
}

prompt(`Thanks for playing ${GAME_NAME}. Have a lucky rest of your day!`);