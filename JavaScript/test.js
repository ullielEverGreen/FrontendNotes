/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const searchInsert = function(nums, target) {
  let left = 0
  let right = nums.length - 1

  if (target > nums[nums.length - 1]) return nums.length
  if (target < nums[0]) return 0

  while(left <= right) {
    const mid = Math.floor((left + right) / 2)
    if (target < nums[mid]) {
      if (target > nums[mid - 1]) { 
        return mid
      }
      right = mid - 1 
    } else if (target > nums[mid]) {
      if (target < nums[mid + 1]) {
        return mid + 1
      }
      left = mid + 1
    } else if (target === nums[mid]){
      return mid
    }
  }
};

const nums = [1,3]
const target = 2

const res = searchInsert(nums, target)

console.log(res)