// 给你一个整数数组 nums ，判断是否存在三元组 [nums[i], nums[j], nums[k]] 满足 i != j、i != k 且 j != k ，
// 同时还满足 nums[i] + nums[j] + nums[k] == 0 。请你返回所有和为 0 且不重复的三元组。

// 注意：答案中不可以包含重复的三元组。

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  const res = []
  nums.sort((a,b) => a-b)

  for (let i = 0; i < nums.length - 2; i++) {
    // 处理三元组的首位，需跳过，避免重复结果
    if (i > 0 && nums[i] === nums[i-1]) continue

    const seen = new Set()

    for (let j = i+1; j < nums.length; j++) {
      const complement = 0 - (nums[i] + nums[j])

      if (seen.has(complement)) {
        res.push([nums[i], nums[j], complement])

        while(j+1 < nums.length && nums[j] === nums[j+1]) {
          j++
        }
      }
      
      seen.add(nums[j])
    }
  }

  return res
};

const threeSum2 = function(nums) {
  const res = []

  nums.sort((a, b) => a-b)

  for (let i = 0; i < nums.length-2; i++) {
    if (i > 0 && nums[i] === nums[i-1]) continue

    let left = i+1
    let right = nums.length - 1

    while(left < right) {
      const sum = nums[i] + nums[left] + nums[right]

      if (sum === 0) {
        res.push([nums[i], nums[left], nums[right]])

        // 跳过重复的left
        while(left < right && nums[left] === nums[left+1]) left++
        // 跳过重复的right
        while(left < right && nums[right] === nums[right-1]) right--

        left++
        right--
      } else if (sum < 0) {
        left++
      } else {
        right--
      }
    }
  }
  return res
}

// const nums = [-4,-2,1,-5,-4,-4,4,-2,0,4,0,-2,3,1,-5,0]
// [[-5,1,4],[-4,0,4],[-4,1,3],[-2,-2,4],[-2,1,1],[0,0,0]]

const nums = [-1,0,1,2,-1,-4]
// [[-1,-1,2],[-1,0,1]]

console.log(threeSum2(nums))