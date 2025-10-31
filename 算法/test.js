/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false

  const sMap = new Map()

  for (let i = 0; i < s.length; i++) {
    sMap.set(s[i], (sMap.get(s[i]) || 0) + 1)
  }
  
  for (let j = 0; j < t.length; j++) {
    if (sMap.has(t[j])) {
      if (sMap.get(t[j]) === 1) {
        sMap.delete(t[j])
      } else {
        sMap.set(t[j], sMap.get(t[j]) - 1)
      }
    }
  }
  
  return !sMap.size
};

const s = "rat", t = "car"

console.log(isAnagram(s, t))