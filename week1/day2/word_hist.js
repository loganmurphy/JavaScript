// Write a function wordHistogram which takes a string as argument and tallies the number of times each word appears in the string, and returns the tally as an object. Example:
//
// > wordHistogram('to be or not to be')
// { to: 2, be: 2, or: 1, not: 1 }

//
// function letterHistogram(string){
//   var array = string.split(' ')
//   console.log(array);
//   var letter_histogram = {};
//   for (let i = 0; i < array.length; i++){
//     var word = array[i]
//     letter_histogram[word] = (letter_histogram[word] || 0) +1
//   }
// console.log(letter_histogram);
// }
//
//
// letterHistogram('to be or not to be');

function wordHistogram(string){
  var array = string.split(' ')
  var sortable_hist = [];
  console.log(array);
  var word_histogram = {};
  for (let i = 0; i < array.length; i++){
    var word = array[i]
    word_histogram[word] = (word_histogram[word] || 0) +1
  }
  for (var dict_item in word_histogram){
    sortable_hist.push([dict_item, word_histogram[dict_item]]);
  }

  sortable_hist.sort(function(a, b) {
    return a[1] - b[1];
  })

console.log(sortable_hist);
}

wordHistogram('to be or not to be');
