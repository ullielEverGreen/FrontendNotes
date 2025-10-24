// 给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。

const { ListNode, createLinkedList, printLinkedList } = require('./utils.js')

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  const dummy = new ListNode(0)
  dummy.next = head
  
  let fast = dummy
  let slow = dummy

  for (let i = 0; i<=n; i++) {
    fast = fast.next
  }

  while(fast !== null) {
    fast = fast.next
    slow = slow.next
  }

  slow.next = slow.next.next

  return dummy.next
};

printLinkedList(removeNthFromEnd(createLinkedList([1,2,3,4,5]), n=2))