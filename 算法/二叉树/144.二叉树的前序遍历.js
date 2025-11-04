// 给你二叉树的根节点 root ，返回它节点值的 前序 遍历。

const { TreeNode } = require('./utils')

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {
  if (!root) return []

  const queue = [root]

  while(queue.length > 0) {
    
  }

};

const root = new TreeNode(1)
root.right = new TreeNode(2)
root.right.left = new TreeNode(3)
console.log(preorderTraversal(root))