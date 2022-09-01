/* exported filterOutStrings */

// 1) Create storage for the (array) output
// 2) Check each value in the (array) input
//    2a) Append the current value to storage
//    2b) Do not append the current value to storage if it is a string
// 3) Output storage

function filterOutStrings(values) {
  var filtered = [];

  for (var i = 0; i < values.length; i++) {
    if (typeof values[i] !== 'string') {
      filtered.push(values[i]);
    }
  }

  return filtered;
}
