// Write a function printBanner which is given some text and prints a banner with a border surrounding the text. The border has to stretch to the length of the text.

function printBanner(text){
  text = text;
  message = '* ' + text + ' *';
  top_bottom = '';
  count = 0;
  while (count < text.length + 4) {
    top_bottom += '*';
    count ++;
  }
  console.log(top_bottom);
  console.log(message);
  console.log(top_bottom);

}

printBanner("Welcome to DigitalCrafts");
