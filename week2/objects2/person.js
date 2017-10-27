// Given this Person type:

// function Person(name) {
//   this.name = name;
//   this.friends = [];
// }
// Person.prototype.addFriend = function(friend) {
//   this.friends.push(friend);
// };
// Person.prototype.createGreeting = function(other) {
//   return 'Yo ' + other.name + '! from ' + this.name + '.';
// };
// Person.prototype.greet = function(other) {
//   console.log(this.createGreeting(other));
// };

class Person {
  constructor(name, friends){
    this.name = name;
    this.friends = [];
  }
  add_friend(friend){
    this.friends.push(friend);
    return this.friends;
  }
  create_greeting(other){
    return 'Yo ' + other.name + '! from ' + this.name + '.';
  }
  greet(other){
    console.log(this.create_greeting(other));
  }
}

var per1 = new Person('Thom');
var per2 = new Person('Steve');

per1.add_friend(per2.name);
per1.create_greeting(per2);
console.log(per1.friends)
per1.greet(per2)

// Rewrite the above type as a class.
