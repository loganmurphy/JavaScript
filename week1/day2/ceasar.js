// Rewrite this cipher function without using a loop, using the help of array's map, join, and string's split method.
//
// function cipher(text) {
//   var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
//   var result = '';
//   for (var i = 0; i < text.length; i++) {
//     var chr = text[i];
//     var idx = alphabet.indexOf(chr.toUpperCase());
//     var newIdx = idx + 13;
//     if (newIdx >= alphabet.length) {
//       newIdx -= 26;
//     }
//     result += alphabet[newIdx];
//   }
//   return result;
// }
//
// // You can assume that the text is only one word, all letters are capitalized, and the offset is always 13
// var encrypted = cipher('GENIUS');
//
// console.log(encrypted)


function cipher(text) {
  var array = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
  // console.log(alphabet);

  console.log(String.charCodeAt(null, array));
}
  // var result = alphabet.map(function(char){
  //   var temp = alphabet.charCodeAt();
  //   console.log(result);
  // })};
cipher('HELLO');
