console.log('Lodash is loaded:', typeof _ !== 'undefined');

var players = [
  { name: 'Jianni Cariaga', hand: [] },
  { name: 'Cody Miller', hand: [] },
  { name: 'Tim Davis', hand: [] },
  { name: 'Anya Forger', hand: [] }
];
var cardsPerHand = 3;

function playGame(players, cardsPerHand) {
  var rank = ['clubs', 'diamonds', 'hearts', 'spades'];
  var suit = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
  var deck = [];

  createDeck(rank, suit, deck);
  shuffleDeck(deck);
  dealHand(deck, cardsPerHand);

  console.log(deck);

  for (var i = 0; i < players.length; i++) {
    console.log(players[i].hand);
  }
}

function createDeck(rank, suit, deck) {
  for (var i = 0; i < rank.length; i++) {
    for (var j = 0; j < suit.length; j++) {
      deck.push({ rank: rank[i], suit: suit[j] });
    }
  }
}

function shuffleDeck(deck) {
  for (var i = 0; i < 9001; i++) {
    var firstCard = Math.floor(Math.random() * deck.length);
    var secondCard = Math.floor(Math.random() * deck.length);
    var temp = deck[firstCard];

    deck[firstCard] = deck[secondCard];
    deck[secondCard] = temp;
  }
}

function dealHand(deck, cardsPerHand) {
  for (var i = 0; i < players.length; i++) {
    for (var j = 0; j < cardsPerHand; j++) {
      players[i].hand.push(deck.pop());
    }
  }
}

playGame(players, cardsPerHand);
