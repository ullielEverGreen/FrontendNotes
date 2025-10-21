// 给你两个字符串 haystack 和 needle ，
// 请你在 haystack 字符串中找出 needle 字符串的第一个匹配项的下标（下标从 0 开始）。
// 如果 needle 不是 haystack 的一部分，则返回  -1 。

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  let index = 0

  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle[0]) {
      index = i
      let flag = true
      for (let j = 1; j < needle.length; j++) {
        if (haystack[i + j] !== needle[j]) {
          flag = false
          break
        }
      }
      if (flag) return index
    }
  }

  return -1
}

const haystack = 'gdsseadbutsad'
const needle = 'sad'

console.log(strStr(haystack, needle))