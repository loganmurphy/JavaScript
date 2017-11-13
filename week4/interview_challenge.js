// Given a list of numbers find the number of pairs that add to 0. Numbers are unique and will not repeat.
//
// Example: [-2, 1, 0, 2] => 1 pair since only -2 + 2 = 0


var nums = [1, 2, -3, 4, -4, -1, 5];

nums.forEach(function(num){
  var second_num = nums.forEach(function(nums){
    var total = [];
    total.push([num, nums]);
    total.forEach(function(num){
      var the_total = num[0] + num[1];
      if( the_total === 0){
      console.log(total)
      }
    });
  });
});
