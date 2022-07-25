// 3)
// - delete front node of LL
// input: head of LL
// return: head of LL, with front node deleted


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

let arr = [1, 2, 3];
let node = listFactoryFromArray(arr);

const deleteNode = node => {
  let newNode = node.next;
  return newNode;
}

console.log(deleteNode(node));