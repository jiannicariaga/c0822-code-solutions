/* exported firstChars */

// 1) Create storage for string output
// 2) Check is string input is empty
//    2a) Output empty string
// 3) Check if number input is greater than lenght of string input
//    3a) Output string input
// 2) Check each letter in string input up to the character at number input
// 3) Concatenate current charcter to storage
// 4) Output storage

function firstChars(length, string) {
  var newString = '';

  if (string.length === 0) {
    return '';
  }

  if (length > string.length) {
    return string;
  }

  for (var i = 0; i < length; i++) {
    newString += string[i];
  }

  return newString;
}

// ALTERNATE SOLUTION USING BUILT-IN METHODS

// function firstChars(length, string) {
//   return string.substring(0, length);
// }
