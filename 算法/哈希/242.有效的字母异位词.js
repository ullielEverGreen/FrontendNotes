// 给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的 字母异位词。
// 字母异位词是通过重新排列不同单词或短语的字母而形成的单词或短语，并使用所有原字母一次。

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  if (s.length !== t.length) return false

  const tMap = new Map()
  const sMap = new Map()

  for (let i = 0; i < t.length; i++) {
    if (tMap.has(t[i])) {
      const num = tMap.get(t[i])
      tMap.set(t[i], num+1)
    } else {
      tMap.set(t[i], 1)
    }
    if (sMap.has(s[i])) {
      const num = sMap.get(s[i])
      sMap.set(s[i], num+1)
    } else {
      sMap.set(s[i], 1)
    }
  }

  if (tMap.size !== sMap.size) return false

  for (let [key, value] of tMap) {
    if (!sMap.has(key) || sMap.get(key) !== value) {
      return false
    }
  }

  return true
};

const s = "anagram", t = "nagaram"
console.log(isAnagram(s,t))