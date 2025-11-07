// 给定一个不含重复数字的数组 nums ，返回其 所有可能的全排列 。你可以 按任意顺序 返回答案。

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  const result = []

  const backTrack = (path, used) => {
    if (path.length === nums.length) {
      result.push([...path])
      return
    }

    for (let i = 0; i < nums.length; i++) {
      if (used[i]) continue

      used[i] = true

      path.push(nums[i])

      backTrack(path, used)

      path.pop()
      used[i] = false
    }
  }

  backTrack([], [])
  return result
};

const nums = [1,2,3]