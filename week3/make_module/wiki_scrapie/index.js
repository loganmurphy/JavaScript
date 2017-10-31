// This is a freeform web scraping project. You will use request and cheerio to scrape a web site for information. Some ideas:
//
// Get information about countries, plants, animals from Wikipedia.
// Get information about programming languages from Wikipedia.
// Get information about Pokemon from...somewhere on the internet.
// The end result of your project is a publish npm module, with which people can get information for a given thing or topic. For example, maybe they can get information about any programming language with this code:
//
// var programmingLanguages = require('programming-languages');
// programmingLanguages.getInfo('JavaScript', function(err, info) {
//   console.log(info); // And info will be an object containing various
//                      // info on JavaScript on Wikipedia
// });
// You will design the API (application programming interface) - which is just a fancy word for how people will use your module. You will write a README file for your module, which will teach them how to use it.

var fs = require('fs'),
    request = require('request'),
    cheerio = require('cheerio'),
    readline = require('readline');
    rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
    search = ''
    pageURL = 'https://Wikipedia.org/wiki/' + search;

function scrapePage () {
  rl.question("What do you want to search Wikipedia for? ", function(search) {
    rl.question("What do you want to know about it? ", function(query) {
      //make an HTTP request for the page to be scraped
      request('https://Wikipedia.org/wiki/' + search, function(error, response, responseHtml){
        if (error) {
          console.error(error.message);
          return;
        }
        //write the entire scraped page to the local file system
        fs.writeFile('./scraped_info/' + search + '.html', responseHtml, function(error){
          if (error) {
            console.error(error.message);
            return;
          }
          console.log('entire-page.html successfully written to HTML folder');
          //write isolated sections of the entire scraped page to the local file system
        });
          //create the cheerio object
          var $ = cheerio.load(responseHtml),
            //create a reference to the desired element
            $links = $(query).nextAll();
        //write the data to the local file system
        fs.writeFile('./scraped_info/' + search + '_' + query +'.html', $links, function(error){
          if (error) {
            console.error(error.message);
            return;
          }
            console.log('title.html successfully written to HTML folder');
        });
      });
    });
  });
}
scrapePage();
