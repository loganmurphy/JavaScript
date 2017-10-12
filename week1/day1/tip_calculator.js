// Write a function tipAmount that is given the bill amount and the level of service (one of good, fair and poor) and returns the dollar amount for the tip. Based on:
//
// good -> 20%
// fair -> 15%
// bad -> 10%
//
var tip = '';

function tip_cal (bill, service){
  if (service.toLowerCase() === "good"){
    return tip = (bill * .20);
  }
  else if (service.toLowerCase() === "fair"){
    return tip = (bill * .15);
  }
  else {
    return tip = (bill * .10);
  }
}

tip_cal(100, "GOOD");
console.log(tip);
