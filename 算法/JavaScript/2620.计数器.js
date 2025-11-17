// 给定一个整型参数 n，请你编写并返回一个 counter 函数。这个 counter 函数最初返回 n，
// 每次调用它时会返回前一个值加 1 的值 ( n ,  n + 1 ,  n + 2 ，等等)。

/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
  return function() {
    return n++
  };
};

const counter = createCounter(11)

console.log(counter())
console.log(counter())
console.log(counter())
/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */