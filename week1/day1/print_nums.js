// Write a function printNumbers which is given a start number and an end number. It will print the numbers from one to the other, one per line:

function  printNumbers(start_num, end_num) {
  count = start_num
  while (count < end_num + 1) {
    console.log(count);
    count ++;
  }
}

printNumbers(1,10);
