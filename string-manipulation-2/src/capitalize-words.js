/* exported capitalizeWords */

// 1) Create storage for string output
// 2) Get first character of string input
//    2a) Convert first character to uppercase
//    2b) Concatenate converted first character to storage
// 3) Check remaining characters of string input
//    3a) Concatenate current character to temporary storage
//    3b) Stop concatenating if current character is a space
//        3ba) Concatenate temporary storage to string output
//        3bb) Clear temporary storage
// 4) Concatenate temporary storage to array output
// 5) Output storage

function capitalizeWords(word) {
  var newWord = '';
  var tempWord = '';

  for (var i = 0; i < word.length; i++) {
    if (word[i] === ' ') {
      newWord += tempWord + ' ';
      tempWord = '';
    } else {
      tempWord += word[i].toLowerCase();
    }
  }

  newWord += tempWord;

  return newWord;
}
