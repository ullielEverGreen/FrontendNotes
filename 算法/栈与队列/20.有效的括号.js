// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。

// 有效字符串需满足：

// 左括号必须用相同类型的右括号闭合。
// 左括号必须以正确的顺序闭合。
// 每个右括号都有一个对应的相同类型的左括号。

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  // 快速判断
  if (s.length === 0) return true;
  if (s.length % 2 !== 0) return false;

  const map = new Map([
    ['(', ')'],
    ['[', ']'],
    ['{', '}']
  ])

  const stack = []

  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      stack.push(map.get(s[i]))
    } else {
      if (s[i] === stack[stack.length - 1]) {
        stack.pop()
      } else {
        return false
      }
    }
  }

  return !stack.length
};

const s = "([])"
console.log(isValid(s))