// console.log('Lodash is loaded:', typeof _ !== 'undefined');

var seats = [
  { name: 'Jianni Cariaga', hand: [], score: 0 },
  { name: 'Cody Miller', hand: [], score: 0 },
  { name: 'Tim Davis', hand: [], score: 0 },
  { name: 'Anya Forger', hand: [], score: 0 }
];
var hand = 2;

function playGame(players, cardsPerHand) {
  var rank = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
  var suit = ['clubs', 'diamonds', 'hearts', 'spades'];
  var deck = [];

  createDeck(rank, suit, deck);

  if (players.length * cardsPerHand > deck.length) {
    console.log('Total cards dealt exceeds number of cards.');
    return;
  }

  shuffleDeck(deck);
  dealHand(players, deck, cardsPerHand);
  getScores(players);
  getWinner(players);
}

function createDeck(rank, suit, deck) {
  for (var i = 0; i < rank.length; i++) {
    for (var j = 0; j < suit.length; j++) {
      deck.push({ rank: rank[i], suit: suit[j] });
    }
  }
}

function shuffleDeck(deck) {
  for (var i = 0; i < deck.length; i++) {
    var firstCard = Math.floor(Math.random() * deck.length);
    var secondCard = Math.floor(Math.random() * deck.length);
    var temp = deck[firstCard];
    deck[firstCard] = deck[secondCard];
    deck[secondCard] = temp;
  }
}

function dealHand(players, deck, cardsPerHand) {
  for (var i = 0; i < players.length; i++) {
    for (var j = 0; j < cardsPerHand; j++) {
      players[i].hand.push(deck.pop());
    }
  }
}

function getScores(players) {
  for (var i = 0; i < players.length; i++) {
    for (var j = 0; j < players[i].hand.length; j++) {
      if (players[i].hand[j].rank === 'A') {
        players[i].score += 11;
      } else if (players[i].hand[j].rank === 'J' ||
        players[i].hand[j].rank === 'Q' ||
        players[i].hand[j].rank === 'K') {
        players[i].score += 10;
      } else {
        players[i].score += parseInt(players[i].hand[j].rank);
      }
    }
  }
}

function getWinner(players) {
  var highestScore = 0;
  var winner = [];

  for (var i = 0; i < players.length; i++) {
    console.log(`${players[i].name}'s score: ${players[i].score}`);

    if (players[i].score > highestScore) {
      highestScore = players[i].score;
    }
  }

  for (var j = 0; j < players.length; j++) {
    if (players[j].score === highestScore) {
      winner.push(players[j]);
    }
  }

  if (winner.length === 1) {
    console.log(`${winner[0].name} wins!`);
  } else {
    console.log('Tie!');
  }
}

playGame(seats, hand);
