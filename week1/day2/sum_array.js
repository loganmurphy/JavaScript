// Write a function sum that takes an array of numbers as argument and returns the sum of those numbers. Use the reduce method to do this.
//
// > sum([1, 2, 3])
// 6

var the_array = [1, 2, 3, 4, 5];

result = the_array.reduce(function(x, y) {
  return x + y;
});

console.log(result)
