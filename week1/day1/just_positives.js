// Write a function positiveNumbers which is given an array of numbers and returns a new array containing only the positive numbers within the given array.
//
//
num_array = [-1,-2,-3,-4,-5,1,2,3,4,5,0]
function positive_nums(num_array){
  the_nums = num_array;
  new_nums = [];
  for (i = 0; i < the_nums.length; i++) {
    if (the_nums[i] >= 0) {
      new_nums.push(the_nums[i]);
    }
  }
  console.log(new_nums);
}

positive_nums(num_array);
