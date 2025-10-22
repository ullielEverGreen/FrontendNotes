// 给你一个由 n 个整数组成的数组 nums ，和一个目标值 target 。
// 请你找出并返回满足下述全部条件且不重复的四元组 [nums[a], nums[b], nums[c], nums[d]] 
// （若两个四元组元素一一对应，则认为两个四元组重复）：

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
  const res = []

  nums.sort((a,b) => a-b)

  for (let i = 0; i < nums.length-3; i++) {
    if (i > 0 && nums[i] === nums[i-1]) continue // 避免跳过首个数 需跳过重复数
    for (let j = i+1; j < nums.length-2; j++) {
      if (j > i+1 && nums[j] === nums[j-1]) continue // 避免跳过首个数 需跳过重复数

      const add = nums[i] + nums[j]

      let left = j + 1
      let right = nums.length - 1

      while(left < right) {
        const sum = add + nums[left] + nums[right]

        if (sum === target) {
          res.push([nums[i], nums[j], nums[left], nums[right]])

          while(left < right && nums[left] === nums[left+1]) left++
          while(left < right && nums[right] === nums[right-1])  right--

          left++
          right--
        } else if (sum < target) {
          left++
        } else {
          right--
        }
      }
    }
  }

  return res
};

const nums = [1,0,-1,0,-2,2], target = 0
// [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
console.log(fourSum(nums, target))