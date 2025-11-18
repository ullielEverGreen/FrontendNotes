/**
 * @param {number} n
 * @return {number}
 */
// 暴力解法，超时
var countPrimes = function(n) {
  let count
  const set = new Set()

  if (n < 2) return 0

  count = 1

  for (let i = 3; i < n; i++) {
    if (i % 2 !== 0) {
      let flag = true

      for (let num of set) {
        if (i % num === 0) {
          flag = false
          break
        }
      }

      if (flag) {
        count++
      }

      set.add(i)
    }
  }

  return count
};

// 艾拉托斯特尼解法 找倍数
var countPrimes1 = function(n) {
  const arr = new Array(n).fill(true)

  arr[0] = arr[1] = false

  for (let i = 2; i < n; i++) {    
    if (arr[i]) {
      for (let j = 2 * i; j < n; j += i) {
        arr[j] = false
      }
    }
  }

  const res = arr.filter(i => i === true)
  return res.length
};

console.log(countPrimes1(499979))

// 499979
// 41537