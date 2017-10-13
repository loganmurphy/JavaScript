// Sort the same array, but not by alphabetically order, but by how long each name is, shortest name first.

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
    if (person1.length > person2.length){
      return 1;
    } else {
      return -1;
    }
  });

  console.log(sorted);
