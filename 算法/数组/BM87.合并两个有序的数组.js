function merge( A, m, B, n ) {
  let i = m - 1
  let j = n - 1
  let k = m + n - 1

  while(i >= 0 && j >= 0) {
    if (A[i] > B[j]) {
      A[k] = A[i]
      i--
    } else {
      A[k] = B[j]
      j--
    }
    k--
  }

  while(j >= 0) {
    A[k] = B[j]
    j--
    k--
  }

  return A
}

const A = [4,5,6]
const B = [1,2,3]

console.log(merge(A, 3, B, 3))