const { TreeNode } = require('./utils')

/**
 * @param {TreeNode} root
 * @return {number}
 */
// 递归DFS
var maxDepth = function(root) {
  if(!root) return 0
  const leftDepth = maxDepth(root.left)
  const rightDepth = maxDepth(root.right)

  return Math.max(leftDepth, rightDepth) + 1
}

var maxDepth1 = function(root) {
  if (!root) return 0
  
  let count = 0

  const traverse = (node, depth) => {
    if (!node) return

    count = Math.max(count, depth)

    traverse(node.left, depth + 1)
    traverse(node.right, depth + 1)
  } 

  traverse(root, 1)
  return count
};

const root = new TreeNode(3);
root.left = new TreeNode(9);
root.right = new TreeNode(20);
root.right.left = new TreeNode(15);
root.right.right = new TreeNode(7);

console.log(maxDepth(root))