// Write a script to create an artist.
//
// $ node create_artist.js
// Artist name? Fruit Evanglists
// Created artist with ID 5.

var pgp = require('pg-promise')({});
var rlp = require('readline-promise');
var db = pgp({database: 'music'})

console.log('Hi, welcome to album-maker 5000! Let\'s get stated, shall we?')
console.log('What artist do you want to add?')

rlp.createInterface({
  input: process.stdin,
  output: process.stdout
})
.each(function(line){
  var q = "INSERT INTO artist VALUES (default, $1)";
  db.result(q, line)
    .then(function(result){
      console.log(`You added ${line} as an artist.`)
      pgp.end();
      rlp.close()
    })
    .catch(function(error){
      console.log(error)
    })
})
