// 给你单链表的头节点 head ，请你反转链表，并返回反转后的链表。

const { ListNode, createLinkedList, printLinkedList } = require('./utils.js')

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  let current = head
  let prev = null

  while(current !== null) {
    const temp = current.next
    current.next = prev
    prev = current
    current = temp
  }
  return prev
};

const head = createLinkedList([1,2,3,4,5])
printLinkedList(reverseList(head))