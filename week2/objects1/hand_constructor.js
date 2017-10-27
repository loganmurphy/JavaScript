// Hand constructor
//
// A hand is simply represented as a collection of cards, but it would also be convenient for a hand to be able to return it's point value. We would like to be able to do this with a Hand constructor:
//
// var myHand = new Hand()
// myHand.addCard(new Card(5, 'diamonds'))
// myHand.addCard(new Card(13, 'spades'))
// myHand.getPoints()
// 15
class Card
class Hand {
  constructor() {
    this.cards = []
  }

  addCard(card) {
  }
}
// var cards = [];

// class Hand{
//   constructor(){
//   }
//   addCard(cards){
//     this.cards.push(cards);
//     return this.cards;
//   }
//   getPoints(cards, point_tally){
//     point_tally = '';
//     this.cards.forEach(function(card){
//       point_tally += card['points']
//       console.log(point_tally);
//     })
//   }
// }

// function Hand() {
//   this.cards = [];
// }
// function Card(points, suit) {
//   this.points = points;
//   this.suit = suit;
// }
//
// Hand.prototype.addCard = function(card) {
//     this.cards.push(card)
// };

var player_hand = new Hand()
var card1 = new Card(10, 'hearts')
var card2 = new Card(5, 'hearts')

player_hand.addCard(new Card(10, 'hearts'));
player_hand.addCard(new Card(5, 'hearts')
);
console.log(player_hand.cards)

// player_hand.getPoints();
// Implement a Hand constructor that will allow the code above to work. Hint: you will want to store as a property of a hand object - an array of card objects.
