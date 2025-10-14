// 给你一个按 非递减顺序 排序的整数数组 nums，返回 
// 每个数字的平方 组成的新数组，要求也按 非递减顺序 排序。

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
  for (let i = 0; i < nums.length; i++) {
    nums[i] = nums[i] * nums[i] 
  }

  function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length - 1 - i; j++) { // 每次循环都会获取一个最大值，排在最后，故循环长度每次减少1
        if (arr[j] > arr[j + 1]) {                   // 相邻元素对比
          // 相邻元素交换
          // const temp = arr[j];
          // arr[j] = arr[j + 1];
          // arr[j + 1] = temp;
          [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
        }
      }
    }
    return arr;
  }
};

const nums = [3,2,1]

console.log(sortedSquares(nums))