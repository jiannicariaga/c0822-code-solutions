/* exported oddOrEven */

// 1) Create storage for the (array) output
// 2) Check each value in the (array) input
//    2a) Append 'even' as a string to storage the if the current value is even
//    2b) Append 'odd' as a string to storage if the current value is odd
// 3) Output storage

function oddOrEven(numbers) {
  var result = [];

  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      result.push('even');
    } else {
      result.push('odd');
    }
  }

  return result;
}
