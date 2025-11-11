// 给定一个区间的集合 intervals ，其中 intervals[i] = [starti, endi] 。
// 返回 需要移除区间的最小数量，使剩余区间互不重叠 。
// 注意 只在一点上接触的区间是 不重叠的。例如 [1, 2] 和 [2, 3] 是不重叠的。

/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
  intervals.sort((a, b) => a[1] - b[1])

  let count = 0
  let end = intervals[0][1]

  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] < end) {
      count++
    } else {
      end = intervals[i][1]
    }
  }

  return count
};

const intervals = [[1,2],[2,3],[3,4],[1,3]]
console.log(eraseOverlapIntervals(intervals))