/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
  const result = []
  const pLen = p.length
  const sLen = s.length

  if (sLen < pLen) return result

  const pMap = new Map()

  for (let i = 0; i < pLen; i++) {
    const char = p[i]
    pMap.set(char, (pMap.get(char) || 0) + 1)
  }

  const windowMap = new Map()

  for (let i = 0; i < pLen; i++) {
    const char = s[i]
    windowMap.set(char, ((windowMap.get(char) || 0) + 1))
  }

  if (mapEqual(windowMap, pMap)) {
    result.push(0)
  }

  for (let left = 1; left <= sLen - pLen; left++) {
    const right = left + pLen - 1;
     
    // 删除左边移出的字符
    const leftChar = s[left - 1];
    const leftCount = windowMap.get(leftChar);
    if (leftCount === 1) {
      windowMap.delete(leftChar);
    } else {
      windowMap.set(leftChar, leftCount - 1);
    }
     
    // 添加右边新增的字符
    const rightChar = s[right];
    windowMap.set(rightChar, (windowMap.get(rightChar) || 0) + 1);
     
    // 检查当前窗口
    if (mapEqual(windowMap, pMap)) {
      result.push(left);
    }
  }

  return result
};

function mapEqual(map1, map2) {
  if (map1.size !== map2.size) return false
  
  for (let [key, value] of map1) {
    if (map2.get(key) !== value) {
      return false
    }
  }
  return true
}

const s = "abab", p = "ab"

console.log(findAnagrams(s, p))