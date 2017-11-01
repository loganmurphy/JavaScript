// Write a function that takes two input filenames and one output filename. Read the files and combine the file contents. Write the combined contents to the output file. Use a promise style to chain the reading and writing together.

var fs = require('fs-promise');
function read_files(file1, file2){
  var p1 = fs.readFile(file1);
  var p2 = fs.readFile(file2);
  return Promise.all([p1, p2]);


function concat(file3, content1, content2){
  var total_content = content1 + content2;
  return fs.writeFile(file3, total_content);
}

read_files('./file1.txt', './file2.txt')
  .then(function (buffers) {
    var content1 = buffers[0].toString();
    var content2 = buffers[1].toString();
    return concat('./concat.txt', content1, content2);
  })
  .then(function () {
    console.log('DONE');
  });
