// 4)
// - add node to end of LL
// input: head of LL, an extra node
// return: head of LL with extra node attached

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
      head = { val: item, next: null };
      current = head;
    } else {
      current.next = { val: item, next: null };
      current = current.next;
    }
  });
  return head;
}

let arr = [1, 2, 3];
let node = listFactoryFromArray(arr);
let anotherNode = listFactoryFromArray([5])

// const addNodeEnd = (node, anotherNode) => {
//   let pointer = node;
//   while (pointer) {
//     pointer = pointer.next;
//     if (!pointer.next) {
//       pointer.next = anotherNode;
//       break;
//     }
//   }
//   return node;
// };

//Refactor
const addNodeEnd = (node, anotherNode) => {
  let pointer = node;
  while (pointer.next) {
    pointer = pointer.next;
  }
  pointer.next = anotherNode;
  return node;
}

const logList = head => {
  let pointer = head;
  while (pointer) {
    console.log(pointer.val);
    pointer = pointer.next;
  }
}

node = (addNodeEnd(node, anotherNode));
logList(node);