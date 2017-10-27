// Add a 1000 millisecond delay to the callback versions of the exercise above.

// 1.
function add(x, y, callback) {
  var result = x + y;
  setTimeout(function () {
    callback(result);
  }, 2000);
}
add(1, 2, function(result) {
  console.log(result);
});

// 2.
function subtract(x, y, callback) {
  var result = x - y;
  setTimeout(function () {
    callback(result);
  }, 3000);
}
subtract(2, 1, function(result) {
  console.log(result);
});

// 3.
function greeting(person, callback) {
  var greet =  `Hola, ${person}`;
  setTimeout(function () {
    callback(greet);
  }, 4000);
}
var person = 'Logan'
greeting(person, function(greet) {
  console.log(greet)
});

// 4.
function product(numbers, callback) {
  setTimeout(function(){
    callback(numbers.reduce(function(a, b) {
      return a * b;
    }, 1));
  }, 5000);
}
var numbers = [1, 2, 3, 4, 5];
product(numbers, function(numbers) {
  console.log(numbers);
});
