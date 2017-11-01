// Write a script to create a track.
//
// $ node create_track.js
// Track name? I like crunchy soft
// Album ID? 2
// Track Duration? 5:33
// Create track with ID 13.

var pgp = require('pg-promise')({});
var prompt = require('prompt-promise');
var db = pgp({database: 'music'})
var res = [];

function add_song(){
  console.log('Hi, welcome to album-maker 5000! Let\'s get stated, shall we?')
  prompt('What is the track name? ')
  .then(function username(val) {
    res.push(val);
    return prompt('What\'s the song writer ID? ')
  })
  .then(function username(val) {
    res.push(val);
    return prompt('What is the track duration? ')
  })
  .then(function username(val) {
    res.push(val);
    var new_track = {name: res[0], song_writer: res[1], duration: res[2]}
    var q = "INSERT INTO song VALUES(default, ${name}, ${song_writer}, ${duration})";
    db.result(q, new_track)
      .then(function(result){
    })
  })
  .then(function handleDb(result){
    return prompt('Want to add another song? ')
  })
  .then(function again(response){
    if (response.toLowerCase() == 'yes'){
      res = [];
      console.log('Okay, let\'s add one more!');
      add_song();
    } else {
      console.log('Okay, that\'s a wrap!');
      pgp.end();
      prompt.finish();
    }
  })
  .catch(function rejected(error) {
    console.log(error);
    prompt.finish();
  });
}

add_song()
