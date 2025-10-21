// 给定两个数组 nums1 和 nums2 ，返回 它们的 交集 。
// 输出结果中的每个元素一定是 唯一 的。我们可以 不考虑输出结果的顺序 。

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
  const map1 = new Map()
  const res = new Set()

  for (let num of nums1) {
    map1.set(num, true)
  }

  for (let num of nums2) {
    if (map1.has(num)) {
      res.add(num)
    }
  }

  return Array.from(res)
};

var intersection2 = function(nums1, nums2) {
  const set1 = new Set(nums1)
  const set2 = new Set(nums2)
  
  return Array.from(set1).filter(i => set2.has(i))
}

const nums1 = [4,9,5], nums2 = [9,4,9,8,4]
console.log(intersection(nums1, nums2))