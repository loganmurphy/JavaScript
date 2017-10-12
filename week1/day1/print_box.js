// Write function printBox which is given a width and height and prints a hollow box of those given dimensions.

function printSquare(width, height) {
  top_bottom = '';
  middle = '';
  count = 0;
  while (count < width) {
  top_bottom += '*';
  count ++;
  }
  count = 0;
  while (count < width) {
    if (count === 0) {
      middle += '*';
    }
    else if (count > 0 && count < (width - 1)) {
      middle += ' ';
    }
    else {
      middle += '*';
    }
    count ++;
  }
  console.log(top_bottom);
  count = 0;
  while (count < height - 2) {
    console.log(middle);
    count ++;
  }
  console.log(top_bottom)
}
printSquare(10, 5);
