/* exported equal */

// 1) Check whether both array inputs are the same length
// 2) Check each element in both arrays for equality
// 3) Output result

function equal(first, second) {
  if (first.length !== second.length) {
    return false;
  }

  for (var i = 0; i < first.length; i++) {
    if (first[i] !== second[i]) {
      return false;
    }
  }

  return true;
}
