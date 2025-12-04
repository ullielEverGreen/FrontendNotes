/**
 * @param {string} s
 * @return {number}
 */

const slideWindow = () => {
  // let left = 0, right = 0;
  // const window = new Map(); // 窗口状态
  // let result = 0; // 结果
  
  // while (right < s.length) {
  //     // 1. 右扩：right右移，更新窗口状态
  //     const c = s[right];
  //     right++;
  //     window.set(c, (window.get(c) || 0) + 1);
      
  //     // 2. 判断是否需要收缩
  //     while (需要收缩的条件) {
  //         // 3. 左缩：left右移，更新窗口状态
  //         const d = s[left];
  //         left++;
  //         window.set(d, window.get(d) - 1);
  //         if (window.get(d) === 0) window.delete(d);
  //     }
      
  //     // 4. 更新结果（注意收缩后窗口可能满足条件）
  //     result = Math.max(result, right - left);
  // }
  
  // return result;
}

var lengthOfLongestSubstring = function(s) {
  let left = 0, right = 0
  const set = new Set()
  let maxLen = 0

  while(right < s.length) {

    right++

    while(set.has(s[right])) {
      set.delete(s[left])
      left++
    }

    set.add(s[right])

    maxLen = Math.max(maxLen, right - left + 1)
  }

  return maxLen
};
const s = 'abcabcbb'
console.log(lengthOfLongestSubstring(s))