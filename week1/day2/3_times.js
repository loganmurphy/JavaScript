// Given this function:
//
// function call3Times(fun) {
//   fun();
//   fun();
//   fun();
// }
// Use the call3Times function to print "Hello, world!" 3 times.
//
var fun = function() {
  console.log('Hello, world!');
}

function call3Times(fun) {
  fun();
  fun();
  fun();
}

call3Times(fun);
