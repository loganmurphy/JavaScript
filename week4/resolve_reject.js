// Write a promise that adds two numbers and resolves the answer. However, if the two inputs provided are not both numbers reject the promise. The API should work like the following:
//
// addNumbers(x, y)
//   .then(function (answer) {
//     console.log(answer);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });

// one way
function addNumbers1(num1, num2){
  var p = new Promise(function (resolve, reject){
    var answer  = Number(num1 + num2)
    if (typeof answer == 'number') {
      console.log(answer)
      resolve(answer)
      return p
    }
  })
  .then(function(value) {
    console.log(`The new num is: ${value}`);
  })
  .catch(function(error) {
    console.log("They both need to be numbers!");
  })
  return p
}

addNumbers1(1, 10)

// another way
function addNumbers(num1, num2){
  var p = new Promise(function (resolve, reject){
    var answer  = Number(num1 + num2)
    try {
      typeof answer == 'number'
      console.log(answer)
      resolve(answer)

    } catch (error) {
        reject(error);
      }

  })
  .then(function(value) {
    console.log(`The new num is: ${value}`);
  })
  .catch(function(error) {
    console.log(error);
  })
  return p
}

addNumbers(1, t)
