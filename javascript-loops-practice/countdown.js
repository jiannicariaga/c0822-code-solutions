/* exported countdown */

// 1) Create storage for the (array) ouput
// 2) Decrement the (number) input by 1 until it is 0
//    2a) Append the current number to storage
// 3) Output storage

function countdown(number) {
  var count = [];

  for (var i = number; i >= 0; i--) {
    count.push(i);
  }

  return count;
}
