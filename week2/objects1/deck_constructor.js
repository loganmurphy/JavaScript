// Deck constructor
//
// A deck is also represented as a collection of cards, but it would also be convenient for it to be able to shuffle itself, and be asked to draw a card. We would like to be able to do this with a Deck constructor:
//
// > var myDeck = new Deck()
// > myDeck.draw()
// Card {point: 6, suit: "clubs"}
// > myDeck.draw()
// Card {point: 1, suit: "spades"}
// > myDeck.shuffle()
// > myDeck.numCardsLeft()
// 50
// Implement a Deck constructor that will allow for the above code to work.


class Deck {
  constructor(deck, used_cards) {
    this.deck = [{point: 6, suit: "clubs"}, {point: 1, suit: "spades"}, {point: 5, suit: "diamonds"}, {point: 10, suit: "hearts"}];
    this.used_cards = [];
  }
  draw() {
    console.log(this.deck[0]);
    this.used_cards.push(this.deck[0]);
    console.log(this.used_cards);

    this.deck.shift();
  }
  cards_left() {
    console.log(this.deck.length);
  }
  shuffle(deck) {
    for (var i = this.deck.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = this.deck[i];
        this.deck[i] = this.deck[j];
        this.deck[j] = temp;
    }
    return this.deck;
  }
}

deck = new Deck();
deck.draw();
deck.cards_left();
deck.draw();
deck.cards_left();
deck.shuffle(deck);
console.log(deck);
deck.shuffle(deck);
console.log(deck);
