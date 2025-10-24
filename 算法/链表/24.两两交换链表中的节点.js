// 给你一个链表，两两交换其中相邻的节点，并返回交换后链表的头节点。
// 你必须在不修改节点内部的值的情况下完成本题（即，只能进行节点交换）。

const { ListNode, createLinkedList, printLinkedList } = require('./utils.js')

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
  const dummy = new ListNode(0)
  dummy.next = head

  let current = dummy

  while(current.next !== null && current.next.next !== null) {
    const first = current.next
    const second = current.next.next

    first.next = second.next
    second.next = first
    current.next = second

    current = current.next.next
  }

  return dummy.next
};

const res = swapPairs(createLinkedList([1,2,3,4]))
printLinkedList(res)