// 给你一个整数数组 nums，有一个大小为 k 的滑动窗口从数组的最左侧移动到数组的最右侧。
// 你只可以看到在滑动窗口内的 k 个数字。滑动窗口每次只向右移动一位。

// 返回 滑动窗口中的最大值 。

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

// 单调队列 时间复杂度O(n)
var maxSlidingWindow = function(nums, k) {
  if (nums.length === 0) return []

  const result = [] // 存储每个窗口的最大值
  const deque = [] // 单调递减队列（存储索引）

  for (let i = 0; i < nums.length; i++) {
    // deque[0] < i-k+1 判断队头元素的索引是否还在窗口中
    // 当前窗口范围是：[i-k+1, i] 
    // i-k+1 是窗口左边界
    if (deque.length > 0 && deque[0] < i-k+1) {
      deque.shift()
    }

    // 将前序比当前数字小的索引都移走，维护单调递减性，保持deque中第一个数字是最大的
    while(deque.length > 0 && nums[deque[deque.length-1] < nums[i]]) {
      deque.pop() 
    }

    // 当前索引入队
    deque.push(i)

    // 形成窗口，记录最大值
    if (i >= k-1) {
      result.push(nums[deque[0]])
    }
  }
  return result
};

// 暴力解法 超出时间限制 时间复杂度O(n*k)
var maxSlidingWindow1 = function(nums, k) {
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

// 暴力解法 超出时间限制 时间复杂度O(n*k)
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


const nums = [1,-1], k = 1
console.log(maxSlidingWindow(nums, k))