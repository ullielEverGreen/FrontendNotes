// 给你一个非负整数数组 nums ，你最初位于数组的 第一个下标 。
// 数组中的每个元素代表你在该位置可以跳跃的最大长度。
// 判断你是否能够到达最后一个下标，如果可以，返回 true ；否则，返回 false 。

/**
 * @param {number[]} nums
 * @return {boolean}
 */

//
var canJump = function(nums) {
  // 当前以及之前所有元素能达到的最远的位置
  let maxReach = 0 // 能到达的最远位置

  for (let i = 0; i < nums.length; i++) {
    // 如果当前位置已经超过了能到达的最远位置，说明无法到达
    if (i > maxReach) return false

    // 更新能到达的最远位置
    // 重点是当前以及之前所有元素能到达的最远位置的范围，所以要取Math.max
    maxReach = Math.max(maxReach, i + nums[i])

    // 如果已经能达到最后一个位置或更远的位置，返回
    if (maxReach >= nums.length - 1) return true
  }
};

const nums = [3,2,1,0,4]
console.log(canJump(nums))