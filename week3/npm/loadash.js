var lodash = require('lodash');

var the_alphabet_string = 'abcdefghijklmnopqrstuvwxyz';
var the_alphabet_array = the_alphabet_string.split('');


console.log(lodash.shuffle(the_alphabet_array));
