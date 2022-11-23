/* exported countValues */

function countValues(stack) {
  let count = 0;
  if (stack.peek() === undefined) return count;
  while (stack.peek() !== undefined) {
    stack.pop();
    count++;
  }
  return count;
}
