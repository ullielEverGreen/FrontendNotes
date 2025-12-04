const lengthOfLongestSubstring = (s) => {
  let left = 0, right = 0
  let set = new Set()
  let maxLen = 0

  while(right < s.length) {

    while(set.has(s[right])) {
      maxLen = Math.max(maxLen, right - left)
      set.delete(s[left])
      left++
    }

    set.add(s[right])
    right++
  }

  return maxLen
}

const s = "abcabcbb"
console.log(lengthOfLongestSubstring(s))