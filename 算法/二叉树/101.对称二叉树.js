// 给你一个二叉树的根节点 root ， 检查它是否轴对称。

const { TreeNode } = require('./utils')

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
// 队列
var isSymmetric = function(root) {
  if (!root) return true

  const queue = [root.left, root.right]

  while(queue.length > 0) {
    const left = queue.shift()
    const right = queue.shift()

    if (left === null && right === null) continue
    if (left === null || right === null) return false
    if (left.val !== right.val) return false

    // 外侧比较
    queue.push(left.left, right.right)
    // 内侧比较
    queue.push(left.right, right.left)
  }

  return true
};

// 递归
var isSymmetric1 = function(root) {
  if (!root) return true
  
  function isMirror(left, right) {
    if (left === null && right === null) return true
    if (left === null || right === null) return false
    if (left.val !== right.val) return false
    return isMirror(left.left, right.right) && isMirror(left.right, right.left)
  }
  return isMirror(root.left, root.right)
}

const root = new TreeNode(1)
root.left = new TreeNode(2)
root.right = new TreeNode(2)
root.left.left = new TreeNode(3)
root.left.right = new TreeNode(4)
root.right.left = new TreeNode(4)
root.right.right = new TreeNode(3)

console.log(isSymmetric1(root))
