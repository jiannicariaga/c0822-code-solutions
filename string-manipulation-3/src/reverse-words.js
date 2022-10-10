/* exported reverseWords */

// 1) Create storage for string output
// 2) Create temporary storage for string input
//    2a) Seperate each word in string input and assign to temporary storage
// 3) Check each word
//    4) Reverse the characters for each word and add a space
//    5) Add each reversed word and space to storage
//    6) Do not add a space for the last word
// 7) Output storage

function reverseWords(string) {
  var reversedString = '';
  var splitString = string.split(' ');

  for (var i = 0; i < splitString.length; i++) {
    if (i === splitString.length - 1) {
      reversedString += splitString[i].split('').reverse().join('');
    } else {
      reversedString += splitString[i].split('').reverse().join('') + ' ';
    }
  }

  return reversedString;
}
