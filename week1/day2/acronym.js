// Acronym
//
// Write a function acronym that takes an array of words as argument and returns the acronym of the words. Use the reduce method to do this.
//
// > acronym(['very', 'important', 'person'])
// 'VIP'
// > acronym(['national', 'aeronautics', 'space', 'administration'])
// 'NASA'

var the_array = ['Oh', 'My', 'God'];

acronym = the_array.reduce(function(total, y) {
  return total += y[0];
}, '');

console.log(acronym)
