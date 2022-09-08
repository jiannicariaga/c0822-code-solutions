/* exported lastChars */

// 1) Create storage for string output
// 2) Check is string input is empty
//    2a) Output empty string
// 3) Check if number input is greater than lenght of string input
//    3a) Output string input
// 2) Check each letter in string input starting at string length minus number input up to string length
// 3) Concatenate current charcter to storage
// 4) Output storage

function lastChars(length, string) {
  var newString = '';

  if (string.length === 0) {
    return '';
  }

  if (length > string.length) {
    return string;
  }

  for (var i = string.length - length; i < string.length; i++) {
    newString += string[i];
  }

  return newString;
}

// ALTERNATE SOLUTION USING BUILT-IN METHODS

// function lastChars(length, string) {
//   return string.substring(string.length - length, string.length);
// }
