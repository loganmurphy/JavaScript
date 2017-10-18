// Allow the counter to either increment 1 or decrement by 1 by calling the increment and decrement methods, respectively. Note: now the counter needs to return an object rather than a function.
//
// > var count = counter(4);
// > count.increment()
// 5
// > count.increment()
// 6
// > count.decrement()
// 5
// > count.decrement()
// 4

// Here's the solution with a class
class Count {
  constructor (count){
  this.counter = count;
    return this.counter
  }
  increase() {
    this.counter += 1;
    console.log(this.counter);
    return this.counter;
  }
  decrease() {
    this.counter -= 1
    console.log(this.counter);
    return this.counter;
  }
}

var count = new Count(5);
count.increase();
count.increase();
count.increase();
count.decrease();
count.decrease();
count.decrease();

// heres the solution with closure
function counter () {
  var count = 0;
  return {
    increment: function () {
      count++;
      console.log(count);
      return count;
    },
    decrement: function () {
      count -= 1;
      console.log(count);
      return count;
    }
  }
}

c = counter();
c.increment();
c.increment();
c.decrement();
