// Rewrite the following normal functions into callback functions.

// function add(x, y) {
//   var result = x + y;
//   return result;
// }

function add(x, y, callback) {
  var result = x + y;
  callback(result);
}
add(1, 2, function(result) {
  console.log(result);
});

// function subtract(x, y) {
//   return x - y;
// }

function subtract(x, y, callback) {
  var result = x - y;
  callback(result);
}
subtract(2, 1, function(result) {
  console.log(result);
});

// function greeting(person) {
//   return 'Hola, ' + person + '!';
// }
function greeting(person, callback) {
  var greet =  `Hola, ${person}`;
  callback(greet);
}
var person = 'Logan'
greeting(person, function(greet) {
  console.log(greet)
});


// function product(numbers) {
//   return numbers.reduce(function(a, b) {
//     return a * b;
//   }, 1);
// }
function product(numbers, callback) {
  callback(numbers.reduce(function(a, b) {
    return a * b;
  }, 1));
}
var numbers = [1, 2, 3, 4, 5];
product(numbers, function(numbers) {
  console.log(numbers);
})
