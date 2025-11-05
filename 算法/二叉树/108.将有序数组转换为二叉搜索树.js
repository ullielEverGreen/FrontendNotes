// 给你一个整数数组 nums ，其中元素已经按 升序 排列，请你将其转换为一棵 平衡 二叉搜索树。

const { TreeNode } = require('./utils')

/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
  function buildTree(left, right) {
    if (left > right) return null
     const mid = Math.floor((left + right) / 2)

     const root = new TreeNode(nums[mid])
     root.left = buildTree(left, mid - 1)
     root.right = buildTree(mid + 1, right)

     return root
  }

  return buildTree(0, nums.length - 1)
};

const nums = [-10,-3,0,5,9]
console.log(sortedArrayToBST(nums))