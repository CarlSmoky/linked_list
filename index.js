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
let head = listFactoryFromArray(arr);

// practice:
// 0)
// - log nodes in Linked List (after this point LL == Linked List,)
// input: head of LL
// return: none. console.log all the node values
const logList = head => {
  let pointer = head;
  while (pointer) {
    console.log(pointer.val);
    pointer = pointer.next;
  }
}

// helper: takes a linked list head, and logs values
// (recursive)
// const logList = (node) => {
//   console.log(node.val);
//   if (node.next) {
//     logList(node.next);
//   }
// }


// logList(head);


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

console.log(listLength(head));


// 2)
// - add node to front of LL
// input: head of LL, an extra node
// return: head of LL with extra node attached

// 3)
// - delete front node of LL
// input: head of LL
// return: head of LL, with front node deleted

// 4)
// - add node to end of LL
// input: head of LL, an extra node
// return: head of LL with extra node attached

// 5)
// - delete last node of LL
// input: head of LL
// return: head of LL, with final node deleted

// 6)
// - insert node in middle of LL
// input: head of LL, an extra node, the position to insert node
// return: head of LL with extra node inserted

// 7)
// - delete node in middle of LL
// input: head of LL, the position to delete node
// return: head of LL with deleted node





// let listHead = listFactoryFromArray([1,2,3]);

// const getLengthRecursive = (node) => {
//   return node.next
//     ? getLengthRecursive(node.next) + 1
//     : 1;
// }

// const reverseList = (node) => {
//   return node.next
//     ? attachToEnd(reverseList(node.next), node)
//     : node;
// }

// const attachToEnd = (head, nodeList, newNode) => {
//   nodeList.next
//     ? attachToEnd(head, nodeList.next, newNode)
//     : nodeList.next = newNode;
//   return head
//  }


// // listHead = reverseList(listHead);
// listhead = attachToEnd(listHead, listHead, {val: 13, next: null});

// logList(listHead)
