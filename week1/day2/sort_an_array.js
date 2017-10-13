// Given an array of strings such the array of names given in the previous problem, sort them by alphabetically order.
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

  var sorted = people.sort(function(person1, person2){
    if (person1 > person2){
      return 1;
    } else {
      return -1;
    }
  });

  console.log(sorted);
