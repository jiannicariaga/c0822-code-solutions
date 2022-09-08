/* exported capitalizeWords */

// 1) Create storage for string output
// 2) Create temporary storage for string input
// 3) Get first character of string input
//    3a) Convert first character to uppercase
//    3b) Concatenate converted first character to temporary storage
// 4) Check remaining characters of string input
//    4a) Concatenate current character to temporary storage as lowercase
//    4b) Check if the previous character was a space
//        4ba) Conver the current character to uppercase
//    4c) Check if the current character is a space
//        4ca) Concatenate temporary storage followed by a space to string output
//        4cb) Clear temporary storage
// 5) Concatenate temporary storage to array output
// 6) Output storage

function capitalizeWords(word) {
  var newWords = '';
  var tempWord = word[0].toUpperCase();

  for (var i = 1; i < word.length; i++) {
    if (word[i] === ' ') {
      newWords += tempWord + ' ';
      tempWord = '';
    } else if (word[i - 1] === ' ') {
      tempWord += word[i].toUpperCase();
    } else {
      tempWord += word[i].toLowerCase();
    }
  }

  newWords += tempWord;

  return newWords;
}

// ALTERNATE SOLUTION USING BUILT-IN METHODS

// function capitalizeWords(word) {
//   var newWords = word.toLowerCase().split(' ');
//
//   for (var i = 0; i < newWords.length; i++) {
//     newWords[i] = newWords[i][0].toUpperCase() + newWords[i].substring(1);
//   }
//
//   return newWords.join(' ');
// }
