/* exported truncate */

// 1) Create storage for string output
// 2) Check each character in string input up to its length minus number input
//    2a) Concatenate current character to storage
// 3) Concatenate ellipsis to storage
// 4) Output storage

function truncate(length, string) {
  var newString = '';

  for (var i = 0; i < length; i++) {
    if (length > string.length) {
      newString = string;
      break;
    }

    newString += string[i];
  }

  newString += '...';

  return newString;
}

// ALTERNATE SOLUTION USING BUILT-IN METHODS

// function truncate(length, string) {
//   return string.substring(0, length) + '...';
// }
