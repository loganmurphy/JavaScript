// Write a function which takes an array of numbers as input and returns a new array containing only the even numbers in the given array.

var a = [1, 2, 10, 6, 5, 3];
result = a.filter(function (y) {
  return (y % 2 === 0);
});

console.log(result);
