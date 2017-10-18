// Write your own
//
// Reverse plugin
//
// Write a jQuery plugin that will reverse the text on the elements it is applied to. Usage:
//
// $('button').reverse();
//
// This will cause the text of all buttons on the page to reverse.
//

$.fn.reverse = function () {
  $(this).click(function () {
    console.log('reverse this: ', this)
    var reversed = $(this).text().split('').reverse().join('');
    alert(reversed);
  });
}
