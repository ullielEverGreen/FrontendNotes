// 给定一个含有 n 个正整数的数组和一个正整数 target 。

// 找出该数组中满足其总和大于等于 target 的长度最小的 子数组 [numsl, numsl+1, ..., numsr-1, numsr] ，并返回其长度。如果不存在符合条件的子数组，返回 0 。

/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
// 滑动窗口
var minSubArrayLen = function(target, nums) {
  let left = 0
  let right = 0
  let sum = 0
  let minLen = nums.length
  let flg = false

  while(right < nums.length) {
    sum += nums[right]
    right++

    while(sum >= target) {
      minLen = Math.min(minLen, right - left)
      sum -= nums[left]
      left++
      flg = true
    }
  }

  return flg ? minLen : 0
};

const target = 7
const nums = [2,3,1,2,4,3]

console.log(minSubArrayLen(target, nums))