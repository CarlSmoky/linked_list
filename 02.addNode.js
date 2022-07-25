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
// 2)
// - add node to front of LL
// input: head of LL, an extra node
// return: head of LL with extra node attached

let arr = [1, 2, 3];
let linkedList = listFactoryFromArray(arr);
let node = listFactoryFromArray([8]);

const addNode = (linkedList, node) => {
  node.next = linkedList;
  return node;
}

console.log(addNode(linkedList, node));