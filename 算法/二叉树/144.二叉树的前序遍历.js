// 给你二叉树的根节点 root ，返回它节点值的 前序 遍历。

const { TreeNode } = require('./utils')

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
// 前序遍历 中左右
var preorderTraversal = function(root) {
  if (!root) return []
  const result = []
  const stack = [root]

  while(stack.length > 0) {
    const currentNode = stack.pop()
    result.push(currentNode.val)

    if (currentNode.right) {
      stack.push(currentNode.right)
    }
    if (currentNode.left) {
      stack.push(currentNode.left)
    }
  }
  return result
};

// 递归
var preorderTraversal1 = function(root) {
  const result = []

  const traverse = (node) => {
    if (node === null) return

    result.push(node.val)
    traverse(node.left)
    traverse(node.right)
  }

  traverse(root)
  return result
}

const root = new TreeNode(1)
root.left = new TreeNode(2)
root.left.left = new TreeNode(4)
root.left.right = new TreeNode(5)
root.left.right.left = new TreeNode(6)
root.left.right.right = new TreeNode(7)
root.right = new TreeNode(3)
root.right.right = new TreeNode(8)
root.right.right.left = new TreeNode(9)
console.log(preorderTraversal(root))