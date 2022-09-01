/* exported findIndex */

// 1) Create storage for the (number) output
// 2) Check each value in the (array) input
//    2a) Check if the (*value*) input is found in the (array) input
//    2b) Get the index of the matching value if found
//    2c) Keep the index of the first match if there are multiple matches
// 3) Output storage

function findIndex(array, value) {
  var index = -1;

  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      index = i;
      break;
    }
  }

  return index;
}
