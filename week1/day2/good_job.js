// Given an array of people's names:
//
var people = [
  'Dom',
  'Lyn',
  'Kirk',
  'Autumn',
  'Trista',
  'Jesslyn',
  'Kevin',
  'John',
  'Eli',
  'Juan',
  'Robert',
  'Keyur',
  'Jason',
  'Che',
  'Ben'];
//
//

// Print out 'Good Job, {{name}}!' for each person's name, one on a line.

var awesome = people.forEach(function(name){
  console.log("Good Job, " + name + "!");
});

return awesome
