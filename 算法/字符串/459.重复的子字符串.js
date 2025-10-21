// 给定一个非空的字符串 s ，检查是否可以通过由它的一个子串重复多次构成。

/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
  // 去找重复子串的长度 长度存在即true
  for (let len = 1; len <= s.length/2; len++) {
    if(s.length % len !== 0) continue // 总长度必须能被子串长度整除 否则跳过这个长度 尝试下一个

    const substring = s.substring(0, len)
    console.log('substring', substring)
    let flg = true

    for (let j = len; j < s.length; j += len) {
      const currentSegment = s.substring(j, j+len)
      console.log('currentSegment', currentSegment)
      if (substring !== currentSegment) {
        flg = false
        break
      } 
    }

    if (flg) return true
  }

  return false
}

const s = 'abab'
console.log(repeatedSubstringPattern(s))