/*
a node looks like this:
{ val: <a number>, next: <either another node or null>}
*/

// helper: takes an array and converts it to a linked list
// returns head
const listFactoryFromArray = (arr) => {
  let current;
  let head;
  arr.forEach((item, i) => {
    if (i === 0) {
      head = {val: item, next: null };
      current = head;
    } else {
      current.next = {val: item, next: null};
      current = current.next;
    }
  });
  return head;
}

// 1)
// - get length of LL
// input: head of LL
// return: Int (length of LL)

const listLength = node => {
  let pointer = head;
  let length = 0;
  while(pointer) {
    length++;
    pointer = pointer.next;
  }
  return length;
}

let arr = [1, 2, 3];
let head = listFactoryFromArray(arr);
console.log(listLength(head));