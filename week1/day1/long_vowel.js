// Write a function, which is given a string, return the result of extending any long vowels to the length of 5.
//
// > longLongVowels('Good')
// 'Goooood'
// > longLongVowels('Cheese')
// 'Cheeeeese'
// > longLongVowels('Man')
// 'Man'
function long_vowel_it(word) {
  var longified = ''
  for (i = 0; i < word.length; i ++) {
    if (word[i] === word[i + 1] && word[i] === 'o') {
      longified += word[i].repeat(5);
    }
    else if (word[i] === 'e') {
      longified += word[i].repeat(5);
    }
    else {
      longified += word[i];
    }
  }
  console.log(longified);
}
long_vowel_it('spoon');
