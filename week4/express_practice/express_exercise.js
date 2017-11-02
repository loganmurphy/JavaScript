var express = require('express');
var app = express();

app.use(express.static('public'));
app.set('view engine', 'hbs');

app.get('/', function(request, response){
  var context = {title: 'Hello World!'};
  response.render('index.hbs', context);
});

app.get('/cats', function(request, response){
  var context = {title: 'Meow!'};
  response.render('cats.hbs', context);
});

app.get('/dogs', function(request, response){
  var context = {title: 'Woof'};
  response.render('dogs.hbs', context);
});

app.get('/cats_and_dogs', function(request, response){
  var context = {title: 'Living together!'};
  response.render('cats_and_dogs.hbs', context);
});

// app.get('/greet/:name', function(request, response){
//   var name = request.params.name;
//   var age = request.query.age || '1';
//   response.send(`Hello ${name}, you are ${age}`);
// });

app.get('/greet/:name', function(request, response){
  var name = request.params.name;
  var year = 2017 - request.query.age || 1942;
  var context = {title: 'What\'s up?', name: name, year: year};
  response.render('greet.hbs', context);
});

app.get('/fav_animals', function(request, response){
  var animals = [
    {name: 'cats', favorite: true},
    {name: 'dogs', favorite: true},
    {name: 'tree frogs', favorite: true},
    {name: 'earth worms', favorite: false},
    {name: 'guinea pigs', favorite: true},
  ];
  var fav_animals = [];
  var names = animals.forEach(function(animal){
    if(animal.favorite == true){
    fav_animals.push(animal);
    } else {
      console.log('Not a fav.')
    }
  })
  console.log(fav_animals);
  var context = {title: 'My Fav Animals', fav_animals: fav_animals}
  response.render('fav_animals.hbs', context)
})

app.listen(8000, function(){
  console.log('Your app is up on port 8000.')
});
