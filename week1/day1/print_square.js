// Write a function printSquare which is given a size and prints a square of that size using asterisks.


function printSquare(num_of_stars) {
  stars = '';
  count = 0;
  while (count < num_of_stars) {
    stars += '*';
    count ++;
  }
  count = 0;
  while (count < num_of_stars) {
    console.log(stars);
    count ++;
  }
}
printSquare(5);
