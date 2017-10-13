// Write a function which takes an array of numbers as input and returns a new array containing result of squaring each of the numbers in the given array by two. Example: squareTheNumbers([1, 2, 3]) should give [1, 4, 9].

var num_array = [1, 2, 3, 4, 5];
var squared_array = [];
num_array.forEach(function(num){
  squared_array.push(num * num);
});
console.log(squared_array);
