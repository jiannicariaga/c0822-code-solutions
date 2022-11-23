/* exported maxValue */

function maxValue(stack) {
  let max = -Infinity;
  let currentVal = 0;
  while (stack.peek() !== undefined) {
    currentVal = stack.pop();
    max = (currentVal > max) ? currentVal : max;
  }
  return max;
}
