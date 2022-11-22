/* exported countValues */

function countValues(stack) {
  let count = 0;
  const values = [];
  if (stack.peek() === undefined) return count;
  while (stack.peek() !== undefined) {
    values.push(stack.pop());
    count++;
  }
  return values.length;
}
