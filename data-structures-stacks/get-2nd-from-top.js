/* exported get2ndFromTop */

function get2ndFromTop(stack) {
  const top = stack.pop();
  if (top === undefined) return undefined;
  const secondFromTop = stack.peek();
  stack.push(top);
  if (secondFromTop === undefined) return undefined;
  return secondFromTop;
}
