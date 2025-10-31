/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
  if (tokens.length === 1) return tokens[0]

  let count
  const stack = []
  const operations = ['+', '-', '*', '/']

  for (let i = 0; i < tokens.length; i++) {
    count = 0
    if (operations.includes(tokens[i])) {
      const right = stack.pop()
      const left = stack.pop()

      if (tokens[i] === '+') {
        count += (right + left)
      } else if (tokens[i] === '-') {
        count += (left - right)
      } else if (tokens[i] === '*') {
        count += (right * left)
      } else {
        count += (Math.trunc(left / right))
      }

      stack.push(count)

    } else {
      stack.push(Number(tokens[i]))
    }
  }
  return stack[0]
};

const tokens = ["4","13","5","/","+"]
console.log(evalRPN(tokens))