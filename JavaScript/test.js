/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = function(s) {
  const map = new Map()
  map.set('I', 1)
  map.set('V', 5)
  map.set('X', 10)
  map.set('L', 50)
  map.set('C', 100)
  map.set('D', 500)
  map.set('M', 1000)

  let res = 0

  for (i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      const left = map.get(s[i])
      const right = map.get(s[i+1]) || 0
      if (left >= right) {
        res += left
      } else {
        res -= left
      }
    }
  }
  return res
}
const s = "IX"
const res = romanToInt(s)

console.log(res)

