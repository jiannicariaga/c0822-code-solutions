/* exported takeNextSmallest */

function takeNextSmallest(queue) {
  if (queue.peek() === undefined) return;
  let first = queue.dequeue();
  let successor = queue.peek();
  if (successor === undefined) return first;
  while (first > successor) {
    queue.enqueue(first);
    first = queue.dequeue();
    successor = queue.peek();
  }
  return first;
}
