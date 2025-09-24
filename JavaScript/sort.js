
// 排序方法 
// sort()方法接受一个比较函数，用于判断哪个值应该排在前面
const arr = [3,2,3,33,4,5,10]

function compare(a, b) {
  if (a < b) {
    return -1
  } 
  if (b < a) {
    return 1
  }
  if (a === b) {
    return 0
  }
}

console.log(arr.sort(compare))