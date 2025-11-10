// 给定一个非空且只包含非负数的整数数组 nums，数组的 度 的定义是指数组里任一元素出现频数的最大值。
// 你的任务是在 nums 中找到与 nums 拥有相同大小的度的最短连续子数组，返回其长度。

/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function(nums) {
  const numsMap = new Map()

  for (let i = 0; i <nums.length; i++) {
    const num = nums[i]

    if (numsMap.has(num)) {
      const info = numsMap.get(num)
      info.count++
      info.last = i
    } else {
      numsMap.set(num, { count: 1, first: i, last: i })
    }
  }

  let maxDegree = 0
  let minLength = nums.length

  for (const [num, info] of numsMap) {
    if (info.count > maxDegree) {
      maxDegree = info.count
      minLength = info.last - info.first + 1
    } else if (info.count === maxDegree) {
      minLength = Math.min(minLength, info.last - info.first + 1)
    }
  }

  return minLength
};

const nums = [1,2,2,3,1]
console.log(findShortestSubArray(nums))