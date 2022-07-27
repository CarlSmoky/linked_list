// 5)
// - delete last node of LL
// input: head of LL
// return: head of LL, with final node deleted

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

let arr = [1, 2, 3, 4, 5];
let node = listFactoryFromArray(arr);

const disconnectLastNode = head => {
  let pointer = head;

  // to the 2nd node from the end, then stop
  while(pointer.next.next) {
    pointer = pointer.next;
  }

  // from the 2nd node from the end, delete the last node
  pointer.next = null

  return head; // we return the head we started with
}

// console.log(deleteLastNode(node));

let node2 = { val:1, next: null};
let node1 = { val:0, next: node2};
// to disconnect node2, we do node1.next = null

const logList = head => {
  let pointer = head;
  while (pointer) {
    console.log(pointer.val);
    pointer = pointer.next;
  }
}

logList(node);

node = disconnectLastNode(node);

console.log("disconnect");

logList(node);
