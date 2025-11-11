// 给定两个整数 n 和 k，返回范围 [1, n] 中所有可能的 k 个数的组合。
// 你可以按 任何顺序 返回答案。

/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
  const result = []

  const backTrack = (start, path) => {
    if (path.length === k) {
      result.push([...path])
      return
    }

    for (let i = start; i <= k; i++) {
      path.push(i)
      backTrack(i+1, path)
      path.pop()
    }
  }

  backTrack(1, [])
  return result
};

// [1,4]中所有可能的2个数的组合
// [
//   [1,2],
//   [1,3],
//   [1,4],
//   [2,3],
//   [2,4],
//   [3,4]
// ]

const n = 4, k = 2
console.log(combine1(n, k))