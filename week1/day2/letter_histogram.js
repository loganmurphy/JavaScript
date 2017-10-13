// Write a function letterHistogram which takes a string as argument. It will tally(histogram) the number of times each character appears in the string, and return the tally as an object. Example:
//
// > letterHistogram('bananas')
// { b: 1, a: 3, n: 2, s: 1 }
// Note: the order of the keys doesn't matter.
//
//

function letterHistogram(string){
  var sortable_hist = [];
  var letter_histogram = {};
  for (let i = 0; i < string.length; i++){
    var letter = string[i]
    letter_histogram[letter] = (letter_histogram[letter] || 0) +1
  }
  console.log(letter_histogram);
  for (var dict_item in letter_histogram){
    sortable_hist.push([dict_item, letter_histogram[dict_item]]);
  }

  sortable_hist.sort(function(a, b) {
    return a[1] - b[1];

  })
  // Bonus answer!
  console.log(sortable_hist);
};


letterHistogram('bananas');
