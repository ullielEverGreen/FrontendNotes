/**
 * @param {TreeNode} root
 * @return {number[]}
 */
// 迭代
var inorderTraversal = function(root) {
  const result =[]
  const stack = []
  let current = root

  while(stack.length || current !== null) {
    while(current !== null) {
      stack.push(current)
      current = current.left
    }

    current = stack.pop()
    result.push(current.val)

    current = current.right
  }

  return result
};