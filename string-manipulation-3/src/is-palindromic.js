/* exported isPalindromic */

// 1) Create (2) temporary storage for string input
//    1a) Remove spaces from string input and assign to first temporary storage
//    1b) Reverse order of first temporary storage and assign to second temporary storage
// 2) Check if both temporary storage are the same
//    2a) Output result

function isPalindromic(string) {
  var newString = string.replaceAll(' ', '');
  var reversedNewString = newString.split('').reverse().join('');

  if (newString !== reversedNewString) {
    return false;
  }

  return true;
}
