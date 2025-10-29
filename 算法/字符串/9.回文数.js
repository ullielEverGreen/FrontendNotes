// 给你一个整数 x ，如果 x 是一个回文整数，返回 true ；否则，返回 false 。

// 回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。

// 例如，121 是回文，而 123 不是。

/**
 * @param {number} x
 * @return {boolean}
 */
// 双指针
var isPalindrome = function (x) {
  if(x < 0) return false
  if(x <= 9) return true
  const str = x + ''

  let left = 0
  let right = str.length - 1

  while(left < right) {
    if (str[left] === str[right]) {
      left++
      right--
    } else {
      return false
    }
  }

  return true
};

// 双指针中心比较
var isPalindrome1 = function (x) {
  if(x < 0) return false
  if(x <= 9) return true

  const str = x + ''

  const mid = Math.floor(str.length / 2)

  for (let i = 0; i < mid; i++) {
    if (str[i] !== str[str.length-1-i]) {
      return false
    }
  }

  return true
}

// 字符串反转
var isPalindrome2 = function (x) {
  if(x < 0) return false
  if(x <= 9) return true

  const arr = (x+'').split('')
  const arrCopy = arr.slice(0)
  const arrRev = arr.reverse()

  return JSON.stringify(arrCopy) === JSON.stringify(arrRev)
}

// 字符串反转
var isPalindrome3 = function (x) {
  if(x < 0) return false
  return x.toString() === x.toString().split('').reverse().join('')
}

const x = 12021
console.log(isPalindrome3(x))