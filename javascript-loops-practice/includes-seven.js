/* exported includesSeven */

// 1) Create storage for the (boolean) output
//    1a) Assign false to storage
// 2) Check each value in the (array) input
//    2a) Invert storage if the number 7 is found
//    2b) Stop checking values once a number 7 is found
// 3) Output storage

function includesSeven(array) {
  var hasSeven = false;

  for (var i = 0; i < array.length; i++) {
    if (array[i] === 7) {
      hasSeven = !hasSeven;
      break;
    }
  }

  return hasSeven;
}
