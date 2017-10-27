// getImageUrl()
//
// Add a getImageUrl method to card objects by adding it as a property to Card.prototype. The method should return the URL path to the png image file for the card.
//
// > myCard.getImageUrl()
// 'images/5_of_diamonds.png'

// function Card(point, suit){
//   this.point = point;
//   this.suit = suit;
// }

// Card.prototype.getImageUrl = function(){
//   var card_path = 'blackjack/cards/' + this.point + '_of_' + this.suit + '.png';
//   console.log(card_path);
//   return card_path;
// };

class Card {
  constructor(point, suit, url){
  this.point = point;
  this.suit = suit;
  this.url = url;
  }
  get_image_url(){
    this.url = 'blackjack/cards/' + this.point + '_of_' + this.suit + '.png';
    console.log(this.url);
    return this.url;
  }
}

var my_card = new Card (5, 'diamonds');
my_card.get_image_url();
