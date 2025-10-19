// 给定一个字符串 arr 和一个整数 k，从字符串开头算起，每计数至 2k 个字符，就反转这 2k 字符中的前 k 个字符。

// 如果剩余字符少于 k 个，则将剩余字符全部反转。
// 如果剩余字符小于 2k 但大于或等于 k 个，则反转前 k 个字符，其余字符保持原样。

/**
 * @param {string} string
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
  const arr = s.split('')

  for (let i = 0; i < arr.length; i += k*2) {
    let left = i
    // 以arr.length - 1做兜底，避免剩余字符少于k个情况下的越界问题
    // 比如 s = 'a', k = 2
    let right = Math.min(i + k - 1, arr.length - 1)

    while(left < right) {
      [arr[left], arr[right]] = [arr[right], arr[left]]
      left++
      right--
    }
  }

  return arr.join('')
};



const s = "abcdefg", k = 2
const res = reverseStr(s, k)
console.log(res)

'bacdfeg'