/* exported union */

// 1) Create storage for array output
// 2) Check each element in first array input
//    2a) If current element is not found in storage,
//        then append current element to storage
// 3) Check each element in second array input
//    3a) If current element is not found in storage,
//        then append current element to storage
// 4) Output storage

function union(first, second) {
  var newArray = [];

  for (var i = 0; i < first.length; i++) {
    if (!newArray.includes(first[i])) {
      newArray.push(first[i]);
    }
  }

  for (var j = 0; j < second.length; j++) {
    if (!newArray.includes(second[j])) {
      newArray.push(second[j]);
    }
  }

  return newArray;
}
