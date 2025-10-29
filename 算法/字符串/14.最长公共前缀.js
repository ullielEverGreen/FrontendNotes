// 编写一个函数来查找字符串数组中的最长公共前缀。

// 如果不存在公共前缀，返回空字符串 ""。

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (!strs.length) return ''
  if (strs.length === 1) return strs[0]
  const basic = strs[0]

  const res = []
  
  let flag = true

  for (let i = 0; i < basic.length; i++) {
    let flag = true
    for (let j = 1; j < strs.length; j++) {
      if (strs[j][i] !== basic[i]) {
        flag = false
      }
    }
    if (flag) {
      res.push(basic[i])
    } else {
      break
    }
  }

  return res.join('')
}; 

const strs = ["cir","car"]
console.log(longestCommonPrefix(strs))