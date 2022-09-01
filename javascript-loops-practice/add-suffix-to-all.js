/* exported addSuffixToAll */

// 1) Create storage for the (array) output
// 2) Check each value in the (array) input
//    2a) Concatenate the current (array) value with the (string) input
// 3) Output storage

function addSuffixToAll(words, suffix) {
  var newWords = [];

  for (var i = 0; i < words.length; i++) {
    newWords.push(words[i] + suffix);
  }

  return newWords;
}
