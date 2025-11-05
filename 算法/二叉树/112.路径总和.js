// 给你二叉树的根节点 root 和一个表示目标和的整数 targetSum 。
// 判断该树中是否存在 根节点到叶子节点 的路径，这条路径上所有节点值相加等于目标和 targetSum 。
// 如果存在，返回 true ；否则，返回 false 。

// 叶子节点 是指没有子节点的节点。

const { TreeNode } = require('./utils')

/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    if (root === null) return false

    if (root.left === null && root.right === null) {
      return root.val === targetSum
    }

    // 减去当前节点的值，得到剩余需要满足的目标值
    const remaining = targetSum - root.val

    return hasPathSum(root.left, remaining) || hasPathSum(root.right, remaining)
};

//       5
//      / \
//     4   8
//    /   / \
//   11  13  4
//  /  \      \
// 7    2      1

// 目标值：22

// 路径总和的计算过程：

// 根节点5：剩余目标值 = 22 - 5 = 17

// 左子节点4：剩余目标值 = 17 - 4 = 13

// 左子节点11：剩余目标值 = 13 - 11 = 2

// 右子节点2：剩余目标值 = 2 - 2 = 0 ✓

// 这条路径 5 → 4 → 11 → 2 的总和是 5+4+11+2 = 22