// 给定两个数组 nums1 和 nums2 ，返回 它们的 交集 。
// 输出结果中的每个元素一定是 唯一 的。我们可以 不考虑输出结果的顺序 。

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
  const res = []

  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      if (nums1[i] === nums2[j] && !res.includes(nums1[i])) {
        res.push(nums1[i])
      } 
    }
  }

  return res
};



const nums1 = [4,9,5], nums2 = [9,4,9,8,4]
console.log(intersection(nums1, nums2))