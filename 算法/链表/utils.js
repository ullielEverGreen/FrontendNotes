// utils.js
class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

// 辅助函数：创建链表
function createLinkedList(arr) {
    if (arr.length === 0) return null;
    
    const head = new ListNode(arr[0]);
    let current = head;
    
    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }
    
    return head;
}

// 辅助函数：打印链表
function printLinkedList(head) {
    let current = head;
    const result = [];
    
    while (current !== null) {
        result.push(current.val);
        current = current.next;
    }
    
    console.log(result.join(' → '));
}

// 导出这些函数和类
module.exports = {
    ListNode,
    createLinkedList,
    printLinkedList
};