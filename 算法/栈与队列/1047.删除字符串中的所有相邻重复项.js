// 给出由小写字母组成的字符串 s，重复项删除操作会选择两个相邻且相同的字母，并删除它们。

// 在 s 上反复执行重复项删除操作，直到无法继续删除。

// 在完成所有重复项删除操作后返回最终的字符串。答案保证唯一。

/**
 * @param {string} s
 * @return {string}
 */
// 递归解法 正确 但时间复杂度 O（n*n）超时
var removeDuplicates = function(s) {
  const res = []
  let duplicateFlg = false

  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i+1]) {
      duplicateFlg = true
      i++
    } else {
      res.push(s[i])
    }
  }

  return duplicateFlg ? removeDuplicates(res) : res.join('')
};

var removeDuplicates2 = function(s) {
  const stack = []

  for(let i = 0; i < s.length; i++) {
    if (stack[stack.length - 1] !== s[i]) {
      stack.push(s[i])
    } else {
      stack.pop()
    }
  }

  return stack.join('')
}

const s = "abbaca"
console.log(removeDuplicates2(s))