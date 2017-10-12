// > cipher('Genius without education is like silver in the mine')
// 'Travhf jvgubhg rqhpngvba vf yvxr fvyire va gur zvar'
//

var decript = 'travhf jvgubhg rqhpngvba vf yvxr fvyire va gur zvar.';
var ciper = 'genius without education is like silver in the mine.'
function ceasar_cipher(message) {
  var letters = message;
  temp_collector = '';
  var decripted = '';
  for (i = 0; i < letters.length; i++) {
    if (letters.charCodeAt(i) > 65 && letters.charCodeAt(i) < 123) {
      temp_collector = letters.charCodeAt(i)
      if (temp_collector + 13 >= 123) {
        temp_collector -= 13;
        decripted += String.fromCharCode(temp_collector);
      }
      else {
        temp_collector += 13;
        decripted += String.fromCharCode(temp_collector);
      }
    }
    else {
      decripted += letters[i]
    }
  }
  if (decripted.charAt(0) === 'g') {
    console.log(decripted.replace('g', 'G'));
  }
  else {
  console.log(decripted.replace('t', 'T'));
  }
}

ceasar_cipher(ciper);
