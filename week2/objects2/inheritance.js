var mom = {
  firstName: 'Alice',
  lastName: 'Wong',
  eyeColor: 'brown',
  hairColor: 'black',
  show_info: function(){
    console.log(this.firstName, this.lastName, this.eyeColor, this.hairColor);
  }
};
var daughter = {
  firstName: 'Ilene',
  hairColor: 'brown'
};

// Write code to make daughter inherit properties from mom. What are the daugther's properties and their values? Print them out.

daughter.__proto__ = mom;
console.log(daughter.lastName, daughter.eyeColor)

// Add a method called showInfo to mom by attaching a function to it as a property. Calling this method will print out all four properties. Call this method on both mom and daugther.

mom.show_info();
daughter.show_info();
