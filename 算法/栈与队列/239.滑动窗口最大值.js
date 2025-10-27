// 给你一个整数数组 nums，有一个大小为 k 的滑动窗口从数组的最左侧移动到数组的最右侧。
// 你只可以看到在滑动窗口内的 k 个数字。滑动窗口每次只向右移动一位。

// 返回 滑动窗口中的最大值 。

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
// 超出时间限制
var maxSlidingWindow = function(nums, k) {
  if (nums.length === 0) return []
  if (nums.length === 1) return [nums[0]]

  const stack = []
  for (let i = 0; i < nums.length - k + 1; i++) {

    const window = []
    for (let j = 0; j < k; j++) {
      window.push(nums[i+j])
    }

    const max = window.sort((a,b) => a-b)
    stack.push(max[k-1])
  }
  return stack
};

// 超出时间限制
var maxSlidingWindow2 = function(nums, k) {
  if (nums.length === 0) return []
  if (nums.length === 1) return [nums[0]]

  const stack = []
  for (let i = 0; i < nums.length - k + 1; i++) {

    let max = -Infinity
    for (let j = 0; j < k; j++) {
      if (nums[i+j] > max) max = nums[i+j]
    }

    stack.push(max)
  }
  return stack
};

// 单调队列
var maxSlidingWindow3 = function(nums, k) {
  if (nums.length === 0) return []

  const res = []
  const deque = [] // 存储索引的单调递减队列

  for (let i = 0; i < nums.length; i++) {
    if (deque.length > 0 && deque[0] < i-k+1) {
      deque.shift()
    }

    while(deque.length > 0 && nums[deque[deque.length - 1]] < nums[i]) {
      deque.pop()
    }
    // 将当前索引入队
    deque.push(i)

    // 当窗口形成时，记录最大值
    if (i >= k - 1) {
      res.push(nums[deque[0]])
    }
  }

  return res
};

const nums = [1,3,-1,-3,5,3,6,7], k = 3
console.log(maxSlidingWindow3(nums, k))