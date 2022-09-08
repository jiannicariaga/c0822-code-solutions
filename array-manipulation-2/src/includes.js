/* exported includes */

// 1) Create storage for boolean output
//    1a) Assign false to storage
// 2) Check each element in array input
//    2a) Assign true to storage if current element matches value input
//    2b) Stop checking each element in aray input
// 3) Output storage

function includes(array, value) {
  var included = false;

  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      included = !included;
      break;
    }
  }

  return included;
}
