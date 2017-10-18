// Counter
//
// Make a counter function that returns a function that returns a successive number each time it is called.
//
// > var count1 = counter()
// > var count2 = counter()
// > count1()
// 1
// > count1()
// 2
// > count2()
// 1
// > count2()
// 2
// > count1()
// 3

var add = (function () {
    var counter = 0;
    return function () {
      console.log(counter);
      return counter += 1;
    }
})();

add();
