// Write a function that takes two input filenames and one output filename. Read the files and combine the file contents. Write the combined contents to the output file. Use a promise style to chain the reading and writing together.

var fs = require('fs-promise');
function read_files(file1, file2){
  var stuff = [];
  var p1 = fs.readFile(file1)
    .then(function (buffer, resolve, reject) {
      var content = buffer.toString()
      stuff.push(content)
      // console.log(stuff)

      // console.log(content)
      return stuff;
      p1.resolve(p1)

    })
    .catch(function (e) {
      reject(e);
    });

  var p2 = fs.readFile(file2)
    .then(function (buffer, resolve, reject) {
      var content2 = buffer.toString()
      stuff.push(content2)
      // console.log(stuff)

      // console.log(content2)
      return stuff;
      p2.resolve(p2)

    })
    .catch(function (e) {
      reject(e);
    });

    return Promise.all(p1, p2, stuff);
}

function concat(file3){
  var p3 = new Promise(function (resolve, reject) {
    // read_files(file1, file2)
    fs.writeFile(file3)
      .then(function () {
        resolve();
      })
      .catch(function (e) {
        reject(e);
      });
      return p3
  })
}

read_files('./file1.txt', './file2.txt')
concat('./concat.txt')
