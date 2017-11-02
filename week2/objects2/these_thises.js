// Given the Person type given in the last problem, add to it a lazyGreet method which will print out the same greeting message but only after 2 seconds.

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
    return this.create_greeting(other)
  }
  lazy_greet(other, name){
    setTimeout( () => {
        console.log(this.create_greeting(other));
    }, 1000);
  }
}

var per1 = new Person('Thom');
var per2 = new Person('Steve');

per1.lazy_greet(per2, per1)
