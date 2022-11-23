/* exported swapFront */

function swapFront(list) {
  if (list.next === null) return list;
  const newNext = list;
  const newHead = list.next;
  const newList = list.next.next;
  newNext.next = newList;
  newHead.next = newNext;
  return newHead;
}
