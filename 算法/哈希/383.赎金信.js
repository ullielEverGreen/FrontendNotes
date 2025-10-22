// 给你两个字符串：ransomNote 和 magazine ，判断 ransomNote 能不能由 magazine 里面的字符构成。
// 如果可以，返回 true ；否则返回 false 。
// magazine 中的每个字符只能在 ransomNote 中使用一次。

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
  const map = new Map()

  for (let i = 0; i < magazine.length; i++) {
    map.set(magazine[i], (map.get(magazine[i]) || 0) + 1)
  }

  for (let i = 0; i < ransomNote.length; i++) {
    if (map.has(ransomNote[i])) {
      const num = map.get(ransomNote[i])
      num === 1 ? map.delete(ransomNote[i]) : map.set(ransomNote[i], num - 1)
    } else {
      return false
    }
  }
  return true
};

const ransomNote = 'aa', magazine = 'ab'
console.log(canConstruct(ransomNote, magazine))