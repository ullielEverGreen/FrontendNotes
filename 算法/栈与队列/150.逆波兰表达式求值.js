// 给你一个字符串数组 tokens ，表示一个根据 逆波兰表示法 表示的算术表达式。

// 请你计算该表达式。返回一个表示表达式值的整数。

// 注意：

// 有效的算符为 '+'、'-'、'*' 和 '/' 。
// 每个操作数（运算对象）都可以是一个整数或者另一个表达式。
// 两个整数之间的除法总是 向零截断 。
// 表达式中不含除零运算。
// 输入是一个根据逆波兰表示法表示的算术表达式。
// 答案及所有中间计算结果可以用 32 位 整数表示。

/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
  // 思路：
  // 遇到数字 入栈
  // 遇到运算符 弹出两个数字 计算

  const stack = []

  for (let i = 0; i < tokens.length; i++) {
    if (tokens[i] === '+' || tokens[i] === '-' || tokens[i] === '*' || tokens[i] === '/') {
      let res
      
      const b = stack.pop() // 先弹出的是右操作符
      const a = stack.pop() // 后弹出的是左操作符

      if (tokens[i] === '+') {
        res = a + b
      } else if (tokens[i] === '-') {
        res = a - b
      } else if (tokens[i] === '*') {
        res = a * b
      } else if (tokens[i] === '/') {
        // 除法向零截断
        // 正数：直接去掉小数部分（向下取整）
        // 负数：也是去掉小数部分（向上取整）
        res = (a * b > 0) ? Math.floor(a/b) : Math.ceil(a/b) // res = Math.trunc(a/b)
      }

      stack.push(res)
    } else {
      stack.push(Number(tokens[i]))
    }
  }

  return stack[0]
};

const tokens = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"]
console.log(evalRPN(tokens))