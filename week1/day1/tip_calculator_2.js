// Write a function totalAmount that takes the same arguments as tipAmount except it returns the total as the tip amount plus the bill amount. This function may make use of tipAmount as a sub-task.

var total = '';

function totalAmount (bill, service){
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
  tip_cal(bill, service);
  return total = bill + tip;
}
totalAmount(100, "good");
console.log(total);
