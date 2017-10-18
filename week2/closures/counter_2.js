// Allow the caller of counter to initialize the count to the first argument that's passed in.
//
// > var count1 = counter(4)
// > count1()
// 5
// > count1()
// 6

var add = (function (n) {
    var counter = n;
    return function () {
      console.log(counter);
      return counter += 1;
    }
})(4);

add();
add();
add();
add();
