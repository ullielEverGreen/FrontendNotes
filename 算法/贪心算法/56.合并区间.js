// 以数组 intervals 表示若干个区间的集合，其中单个区间为 intervals[i] = [starti, endi] 。
// 请你合并所有重叠的区间，并返回 一个不重叠的区间数组，该数组需恰好覆盖输入中的所有区间 。

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  if (intervals.length === 0) return []

  // 按起始位置排序
  intervals.sort((a, b) => a[0] - b[0])

  const result = [intervals[0]]

  for (let i = 1; i < intervals.length; i++) {
    const a = result[result.length - 1]
    const b = intervals[i]

    // 有重叠
    if (a[1] >= b[0]) {
      b[1] = Math.max(a[1], b[1])
    } else {
      result.push(intervals[i])
    }
  }

  return result
}

const intervals = [[1,3],[2,6],[8,10],[15,18]]

console.log(merge(intervals))