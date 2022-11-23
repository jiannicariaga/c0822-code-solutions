/* exported takeSmaller */

function takeSmaller(queue) {
  if (queue.peek() === undefined) return;
  const first = queue.dequeue();
  const second = queue.dequeue();
  if (second === undefined) return first;
  if (first < second) {
    queue.enqueue(second);
    return first;
  }
  queue.enqueue(first);
  return second;
}
