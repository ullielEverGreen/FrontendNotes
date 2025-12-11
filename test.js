/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  const result = []
  const queue = [] // 维护单调递减的元素的索引

  for (let i = 0; i < nums.length; i++) {
    if (queue.length && queue[0] < i-k+1) {
      queue.shift()
    }
    while(queue.length && nums[queue[queue.length - 1]] <= nums[i]) {
      queue.pop()
    }
    queue.push(i)
    
    console.log('queue', queue)
    if (i-k+1>= 0) {
      result.push(nums[queue[0]])
      console.log('result', result)
    }
  }
  return result
};

const nums = [1,3,-1,-3,5,3,6,7], k = 3
console.log(maxSlidingWindow(nums, k))