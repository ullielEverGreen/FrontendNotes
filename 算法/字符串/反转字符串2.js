// 给定一个字符串 s 和一个整数 k，从字符串开头算起，每计数至 2k 个字符，就反转这 2k 字符中的前 k 个字符。

// 如果剩余字符少于 k 个，则将剩余字符全部反转。
// 如果剩余字符小于 2k 但大于或等于 k 个，则反转前 k 个字符，其余字符保持原样。

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {

  let startIdx = 0

  for (let i = 0; i < s.length; i++) {
    if ((s.length - i) > k*2) {
      if ((i+1) % (k*2) === 0) {
        for (let j = startIdx; j < startIdx + k; j++) {
          console.log(startIdx + k*2 - j - 1)
          const temp = s[j]
          s[j] = s[startIdx + k*2 - j]
          s[startIdx + k*2 - i] = temp
        }
        startIdx += k*2
      }
    } else {
      if (s.length - i > k) {
        for (let j = startIdx; j < startIdx + k; j++) {
          const temp = s[j]
          s[j] = s[startIdx + k*2 - j]
          s[startIdx + k*2 - i] = temp
        }
      } else {
        for (let j = startIdx; i < s.length; j++) {
          const temp = s[j]
          s[j] = s[s.length - j - startIdx]
          s[s.length - j - startIdx] = temp
        }
      }
    }
  }

  return s
};

const s = "abcdefg", k = 2
const res = reverseStr(s, k)
console.log(res)

'bacdfeg'