// 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。

// 你可以假设每种输入只会对应一个答案，并且你不能使用两次相同的元素。

// 你可以按任意顺序返回答案。

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const map = new Map()
  for (let i = 0; i < nums.length; i++) {

    // 先if判断 再set值 避免 nums = [3,3] target = 6 这种重复值的情况
    if (map.has(target - nums[i])) {
      return [i, map.get(target - nums[i])]
    }

    map.set(nums[i], i)
  }

  return []
};

var twoSum2 = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {

    const anotherIndex = nums.indexOf(target - nums[i])

    if (anotherIndex > -1 && anotherIndex !== i) {
      return [i, anotherIndex]
    }
  }
}

const nums = [3,2,4], target = 6
console.log(twoSum2(nums, target))