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

let arr = [1, 2, 3];
let head = listFactoryFromArray(arr);
logList(head);