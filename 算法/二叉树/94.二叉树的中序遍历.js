/**
 * @param {TreeNode} root
 * @return {number[]}
 */
// 迭代
// 中序遍历需引入current
var inorderTraversal = function(root) {
  if (!root) return []

  const result = []
  const stack = []

  let current = root

  while(stack.length > 0 || current !== null) {
    while(current !== null) {
      stack.push(current)
      current = current.left
    }

    current = current.pop()
    result.push(current.val)

    current = current.right
  }
  return result
};