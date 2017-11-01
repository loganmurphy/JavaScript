

var rp = require('request-promise');
var r = require('request');
var fs = require('fs-promise');
var cheerio = require('cheerio')

function getImgs(url) {
  return new Promise(function (resolve, reject) {
    rp(url)
      .then(function(response){
        var $ = cheerio.load(response);
        var requests = [];
        var files = [];
        var $pics = $('img').each(function(i, elem){
          var img_url = $(this).attr('src');
          console.log(i, img_url);
          if (img_url.startsWith('//')) {
            img_url = 'https:' + img_url;
          } else if (img_url.startsWith('/')) {
            img_url = 'https://wikipedia.org' + img_url;
          }


          var p = new Promise(function (resolve, reject) {
            r(img_url, {encoding: 'binary'}, function (error, response, body) {
              var parts = img_url.split('.');
              console.log(parts);
              fs.writeFile('./scraped_info/' + i + '.' + parts[parts.length - 1], body, 'binary')
                .then(function () {
                  resolve();
                })
                .catch(function (e) {
                  reject(e);
                });
            });
          });
          files.push(p)
        });

        return Promise.all(files);
      })
      .then(function(responses){
        var p = responses.forEach(function(response, index){
          debugger;

        })
        return Promise.all(responses);
      })
      .then(function () {
        resolve('I got your back.');
      })
      .catch(function(error){
        reject(error);
      });
  });
}

getImgs('https://Wikipedia.org/wiki/xmen')
  .then(function () {
    console.log('DONE');
  })
