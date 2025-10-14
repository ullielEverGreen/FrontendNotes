/**
 * @param {number[]} digits
 * @return {number[]}
 */
const plusOne = function(digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i]++
      return digits
    } else {
      digits[i] = 0
    }
  }


  digits.unshift(1)
  return digits
};

const digits = [9,9,8,9]

const res = plusOne(digits)

console.log(res)