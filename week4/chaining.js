// Using request-promise and fs-promise modules build a function called saveWebPage which takes two parameters, url and filename. The function should chain the two promises together to download the URL and then save the file.


var rp = require('request-promise');
var fs = require('fs-promise');

var urls = [
  'https://en.wikipedia.org/wiki/Futures_and_promises',
  'https://en.wikipedia.org/wiki/Continuation-passing_style',
  'https://en.wikipedia.org/wiki/JavaScript',
  'https://en.wikipedia.org/wiki/Node.js',
  'https://en.wikipedia.org/wiki/Google_Chrome'
];

function saveWebPage(url, filename){
  rp(url)
    .then(function(response){
      console.log(response);
      return response;
    })
    .then(function(response){
      var p = fs.writeFile('./scraped_info/' + filename + '.html', response);
      console.log('I got your back.');
      return p;
    })
    .catch(function(error){
      console.error('You done messed up.', error);
    })
  }

saveWebPage(urls[0], 'data');
