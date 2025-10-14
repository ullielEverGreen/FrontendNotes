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

const nums1 = [1,3]
const target1 = 2


var search = function(nums, target) {
  let left = 0 
  let right = nums.length - 1

  while(left <= right) {
    const mid = Math.floor((left + right) / 2)
    if (nums[mid] > target) {
      right = mid - 1
    } else if (nums[mid] < target){
      left = mid + 1
    } else {
      return mid
    }
  }
  return -1
};

const nums = [-1,0,3,5,9,12]
const target = 9

// output = 4
const res = search(nums, target)

console.log(res)