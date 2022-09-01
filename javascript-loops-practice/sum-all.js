/* exported sumAll */

// 1) Create storage for the (number) output
// 2) Check each number in the (array) input
//    2a) Add current number to the existing storage value
// 3) Output storage

function sumAll(numbers) {
  var sum = 0;

  for (var i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }

  return sum;
}
