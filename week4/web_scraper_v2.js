// Given an array of urls:
//

var rp = require('request-promise');
var fs = require('fs-promise');

var urls = [
  'https://en.wikipedia.org/wiki/Futures_and_promises',
  'https://en.wikipedia.org/wiki/Continuation-passing_style',
  'https://en.wikipedia.org/wiki/JavaScript',
  'https://en.wikipedia.org/wiki/Node.js',
  'https://en.wikipedia.org/wiki/Google_Chrome'
];

var requests = [];
var responses = [];
urls.forEach(function (url) {
  requests.push(rp(url));
})
// Use Promise.all and request-promise to retrieve the HTML files for all the web pages.
//

// single promise:
// rp('https://en.wikipedia.org/wiki/Futures_and_promises')
//   .then(function(response){
//     console.log(response);
//     return response;
//   })
//   .then(function(response){fs.writeFile('./scraped_info/response.html', response, function(error){
//     console.log('entire-page.html successfully written to HTML folder');
//   })})
//   .catch(function (error) {
//     console.error('ERROR ERROR ERROR ERROR!');
//   });

// multiple promises:
Promise.all(requests)
  .then(function(responses){
    // console.log(responses);
    var writes = [];
    responses.forEach(function (response, index) {
      // console.log(response);
      var p = fs.writeFile('./scraped_info/' + index + '.html', response);
      writes.push(p);
    });
    return Promise.all(writes);
  })
  .then(function (files) {
    console.log(files);
  })
  .catch(function (error) {
    console.error('ERROR ERROR ERROR ERROR!', error);
  });
