// 给定一个含有 n 个正整数的数组和一个正整数 target 。

// 找出该数组中满足其总和大于等于 target 的长度最小的 子数组 [numsl, numsl+1, ..., numsr-1, numsr] ，并返回其长度。如果不存在符合条件的子数组，返回 0 。

/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
  const len = 1

  for (let i = 0; i < nums.length - len + 1; i++) {
    if (nums[i] >= target) return len
  }
};

const target = 7
const nums = [2,3,1,2,4,3]

console.log(minSubArrayLen(target, nums))