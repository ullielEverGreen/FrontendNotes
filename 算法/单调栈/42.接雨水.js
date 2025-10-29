// 给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，
// 计算按此排列的柱子，下雨之后能接多少雨水。

/**
 * @param {number[]} height
 * @return {number}
 */

// 双指针
var trap = function(height) {
  let left = 0
  let right = height.length - 1
  let leftMax = 0
  let rightMax = 0
  let result = 0

  while(left < right) {
    if (height[left] < height[right]) {
      if (height[left] >= leftMax) {
        leftMax = height[left]
      } else {
        result += leftMax - height[left]
      }

      left++
    } else {
      if (height[right] >= rightMax) {
        rightMax = height[right]
      } else {
        result += rightMax - height[right]
      }

      right--
    }
  }
  return result
};

// 单调栈
var trap1 = function(height) {
  const stack = []
  let result = 0

  for (let i = 0; i < height.length; i++) {
    while(stack.length > 0 && height[i] > height[stack[stack.length - 1]]) {
      const bottom = stack.pop()

      if (stack.length === 0) break

      const left = stack[stack.length - 1]
      const right = i

      const width = right - left - 1
      const waterHeight = Math.min(height[left], height[right]) - height[bottom]

      result += width * waterHeight
    }
    stack.push(i)
    console.log(stack)
  }
  
  return result
}

const height = [3,0,2,0,4]
console.log(trap1(height))