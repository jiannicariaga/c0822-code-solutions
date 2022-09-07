/* exported swapChars */

// 1) Create storage for string output
// 2) Create temporary storage for character in string input at index of first number input
// 3) Create temporary storage for character in string input at index of second number input
// 4) Check each character in string input
//    4a) Concatenate each character to storage
//    4b) Concatenate character at index of first number input to index of second number input
//    4c) Concatenate character at index of second number input to index of first number input
// 5) Output storage

function swapChars(firstIndex, secondIndex, string) {
  var newString = '';
  var firstChar = string[firstIndex];
  var secondChar = string[secondIndex];

  for (var i = 0; i < string.length; i++) {
    if (i === firstIndex) {
      newString += secondChar;
    } else if (i === secondIndex) {
      newString += firstChar;
    } else {
      newString += string[i];
    }
  }

  return newString;
}

// ALTERNATE SOLUTION USING BUILT-IN METHODS

// function swapChars(firstIndex, secondIndex, string) {
//   var newString = string.split('');
//   var firstChar = string.charAt(firstIndex);
//   var secondChar = string.charAt(secondIndex);
//
//   newString[firstIndex] = secondChar;
//   newString[secondIndex] = firstChar;
//
//   return newString.join('');
// }
