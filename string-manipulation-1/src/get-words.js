/* exported getWords */

// 1) Create storage for array output
// 2) Create temporary storage for single words
// 4) Check if there is a string input
//    4a) Output empty array if there is no string
// 3) Check each character in string input
//    3a) Concatenate current character to temporary storage
//    3b) Stop concatenating if current character is a space
//        3ba) Append temporary storage to array output
//        3bb) Clear temporary storage
// 4) Append temporary storage to array output
// 5) Output storage

function getWords(string) {
  var words = [];
  var tempWord = '';

  if (string.length === 0) {
    return [];
  }

  for (var i = 0; i < string.length; i++) {
    if (string[i] === ' ') {
      words.push(tempWord);
      tempWord = '';
    } else {
      tempWord += string[i];
    }
  }

  words.push(tempWord);

  return words;
}

// ALTERNATE SOLUTION USING BUILT-IN METHODS

// function getWords(string) {
//   return string.length === 0 ? [] : string.split(' ');
// }
