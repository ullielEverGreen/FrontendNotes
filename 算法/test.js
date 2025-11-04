const { TreeNode } = require('./二叉树/utils')

const levelOrder = function(root) {
  if (!root) return []

  const result = []
  const queue = [root]

  while(queue.length > 0) {
    const levelSize = queue.length
    const levelVal = []

    for (let i = 0; i < levelSize; i++) {
      const currentNode = queue.shift()
      levelVal.push(currentNode.val)

      if (currentNode.left !== null) {
        queue.push(currentNode.left)
      }
      if (currentNode.right !== null) {
        queue.push(currentNode.right)
      }
    }

    result.push(levelVal)
  }

  return result
}

const root = new TreeNode(3)
root.left = new TreeNode(9)
root.right = new TreeNode(20)
root.right.left = new TreeNode(15)
root.right.right = new TreeNode(7)
console.log(levelOrder(root))