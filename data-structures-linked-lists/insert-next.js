/* global LinkedList */ // eslint-disable-line no-unused-vars
/* exported insertNext */

function insertNext(list, value) {
  const newNext = new LinkedList(value);
  newNext.next = list.next;
  list.next = newNext;
}
