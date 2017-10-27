// Write a program that prompts the user to enter a file name, and reads in the contents of the file, convert the text to all caps, and prints it out.
//
// Assuming the file file1.txt contains the text: Hello, I am file 1.. Example output:
//
// $ node cap_file.js
// filename: file1.txt
// HELLO, I AM FILE 1.
// Trigger an error condition by running the program on a non-existent file. Your program should display the error message, and it should display something like:
//
// $ node cap_file.js
// filename: blah.txt
// ENOENT: no such file or directory, open 'blah.txt'

var fs = require('fs');
var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question("What file do you want to open? ", function(filename) {
  console.log("Here's your file:", filename);
  rl.close();
  fs.readFile(filename, function (error, buffer) {
    if (error) {
      console.error(error.message);
      return;
    }
    var contents = buffer.toString();
    var all_caps = contents.toUpperCase();
    console.log(all_caps);
  });
});
