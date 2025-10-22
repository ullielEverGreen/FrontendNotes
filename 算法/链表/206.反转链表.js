// 给你单链表的头节点 head ，请你反转链表，并返回反转后的链表。

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

const { ListNode, createLinkedList, printLinkedList } = require('./utils')

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  let prev = null
  let current = head

  while(current !== null) {
    const nextTemp = current.next // 暂存cur的next
    current.next = prev // 让cur指向prev 实现 prev <- cur

    prev = current // prev 后移
    current = nextTemp // cur 后移
  }

  return prev
};

// 1 -> 2 -> 3
// 翻转后
// 1 <- 2 <- 3  其实就是 3 -> 2 -> 1


const head = createLinkedList([1,2,3,4,5])
const res = reverseList(head)
printLinkedList(res)