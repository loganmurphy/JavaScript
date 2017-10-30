// Given this code:
//
var index = require('./index');

var url = 'http://css-tricks.com';
var filename = 'css-tricks.html';
index.saveWebPage(url, filename, function(err) {
  if (err) {
    console.log(err.message);
    return;
  }
  console.log('It worked.');
});


// Extract the saveWebPage function as a module in a separate file, and have the main script require it in order to use it.
