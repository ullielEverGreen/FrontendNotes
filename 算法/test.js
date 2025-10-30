/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  const arr = n.toString().split('').map(i => { return Number(i) })

  let sum = 0
  let nums = arr
  const count = new Set()

  while(sum !== 1) {
    sum = 0
    for (let num of nums) {
      sum += num * num
    }

    if (count.has(sum)) {
      return false
    } 

    count.add(sum)
    nums = sum.toString().split('').map(i => { return Number(i) })
  }

  return true
};

const n = 2
console.log(isHappy(n))