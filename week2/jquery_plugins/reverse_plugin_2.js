// Reverse Plugin: Part 2
//
// Add a preserveCapitalization option, which if true, will preserve the capitalization of the text on the button. For example, if the button's text was Ok, it will turn it into Ko.

$.fn.reverse = function () {
  $(this).click(function () {
    var old_string = $(this).text();
    var capitalize = false;
    var reversed = $(this).text().toLowerCase().split('').reverse().join('');
    if (old_string[0] === old_string[0].toUpperCase()){
      capitalize = true;
      var capital = reversed[0].toUpperCase();
      var new_string = capital + reversed.slice(1);
      alert(new_string);
    } else {
      alert(reversed);
    }
  });
}
