const { ListNode, createLinkedList, printLinkedList } = require('./utils.js')

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
  if (head === null || head.next === null) return null

  let slow = head // 慢指针，每次走一步
  let fast = head // 快指针，每次走两步

  // 第一阶段：检测是否有环
  while(fast !== null && fast.next !== null) {
    slow = slow.next // 慢指针前进一步
    fast = fast.next.next // 快指针前进两步

    // 如果快慢指针相遇，说明有环
    if (slow === fast) {
      // 第二阶段：寻找环的入口
      let pointer = head // 新指针从头开始
      
      // pointer和slow以相同速度前进，相遇点就是环的入口
      while(pointer !== slow) {
        pointer = pointer.next
        slow = slow.next
      }
      return pointer // 返回环的入口节点
    }
  }
  // 快指针到达链表末尾，说明无环
  return null
};