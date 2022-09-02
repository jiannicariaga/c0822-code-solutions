/* exported reverseWord */

// 1) Create storage for string output
// 2) Check each character in string input starting from end
//    2a) Concatenate current character to storage
// 3) Output storage

function reverseWord(word) {
  var droW = '';

  for (var i = word.length - 1; i >= 0; i--) {
    droW += word[i];
  }

  return droW;
}

// ALTERNATE SOLUTION USING BUILT-IN METHODS

// function reverseWord(word) {
//   return word.split('').reverse().join('');
// }
