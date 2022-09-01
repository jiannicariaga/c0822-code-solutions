/* exported getIndexes */

// 1) Create storage for the (array) output
// 2) Check each value in the (array) input
//    2a) Append the index of the current value to storage
// 3) Output storage

function getIndexes(array) {
  var indexes = [];

  for (var i = 0; i < array.length; i++) {
    indexes.push(i);
  }

  return indexes;
}
