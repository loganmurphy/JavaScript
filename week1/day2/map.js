// Implement your own custom map function which takes two arguments: an array arr and a function fun. It will return a new array, with each of its results being the result of calling fun with each array element.
//
var array = [
  {name: 'captain_America'}, {name: 'the_Terminator'}, {name: 'g-Munny'},
  {name: 'scooby_doo'}
];

var custom_map = array.map(function(item){
  if (item.name === 'scooby_doo'){
    return `Have a Scooby Snack ${item.name}`;
  } else {
    return `Hey there ${item.name}, happy birthday!`;
  }
});

console.log(custom_map);
