/* exported isAnagram */

// 1) Create (2) temporary storage for both string inputs
//    2a) Remove spaces in both string inputs
//    2b) Rearrange both string input's characters alphabetically
//    2b) Check each character in both string inputs to see if they are the same
//        2ba) Output result

function isAnagram(firstString, secondString) {
  var fString = firstString.replaceAll(' ', '').split('').sort().join('');
  var sString = secondString.replaceAll(' ', '').split('').sort().join('');

  if (fString !== sString) {
    return false;
  }

  return true;
}
