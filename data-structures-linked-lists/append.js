/* global LinkedList */ // eslint-disable-line no-unused-vars
/* exported append */

function append(list, value) {
  const newNode = new LinkedList(value);
  while (list !== null) {
    if (list.next === null) break;
    list = list.next;
  }
  list.next = newNode;
}
