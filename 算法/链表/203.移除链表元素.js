// 给你一个链表的头节点 head 和一个整数 val ，
// 请你删除链表中所有满足 Node.val == val 的节点，并返回 新的头节点 。

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

const { ListNode, createLinkedList, printLinkedList } = require('./utils')

// var removeElements = function(head, val) {
//   // 处理空链表的情况
//   if (head === null) return null;
  
//   const dummy = new ListNode(0);
//   dummy.next = head;
  
//   let current = dummy;
  
//   // 更安全的遍历条件
//   while (current.next !== null) {
//     if (current.next.val === val) {
//       current.next = current.next.next;
//     } else {
//       current = current.next;
//     }
//   }

//   return dummy.next;
// };

const removeElements = (head, val) => {
  const dummy = new ListNode(0)
  dummy.next = head

  let current = dummy

  while(current.next !== null) {
    if (current.next.val === val) {
      current.next = current.next.next
    } else {
      current = current.next
    }
  }

  return dummy.next
}

const head = createLinkedList([1,2,6,3,4,5,6]), val = 6
const res = removeElements(head, val)
printLinkedList(res)