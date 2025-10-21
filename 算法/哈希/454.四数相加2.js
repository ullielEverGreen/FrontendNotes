// 给你四个整数数组 nums1、nums2、nums3 和 nums4 ，数组长度都是 n ，
// 请你计算有多少个元组 (i, j, k, l) 能满足：

// 0 <= i, j, k, l < n
// nums1[i] + nums2[j] + nums3[k] + nums4[l] == 0

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */
var fourSumCount = function(nums1, nums2, nums3, nums4) {
  const map = new Map()
  let k = 0

  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      const sum = nums1[i] + nums2[j]
      map.set(sum, (map.get(sum) || 0) + 1)
    }
  }

  for (let i = 0; i < nums3.length; i++) {
    for (let j = 0; j < nums4.length; j++) {
      const sum = nums3[i] + nums4[j]
      const target = 0 - sum
      if (map.has(target)) {
        k += map.get(target)
      }
    }
  }
  return k
};

// (map.get(num) || 0) + 1
// 等价于
// if (map.has(sum)) {
//     map.set(sum, map.get(sum) + 1);
// } else {
//     map.set(sum, 1);
// }

const nums1 = [1,2], nums2 = [-2,-1], nums3 = [-1,2], nums4 = [0,2]
console.log(fourSumCount(nums1, nums2, nums3, nums4))