const isHappy = (n) => {
  let num = n
  const set = new Set()

  while(num !== 1) {
    const arr = String(num).split('')

    let sum = 0
    for (let i = 0; i < arr.length; i++) {
      sum += Number(arr[i]) * Number(arr[i])
    }

    if (set.has(sum)) return false

    set.add(sum)

    num = sum
  }

  return true
}

const n = 2
console.log(isHappy(n))
const dummy = new ListNode(0)
dummy.next = head
let current = dummy

while(current !== null) {
  if (current.next.val === val) {
    current.next = current.next.next
  } else {
    current = current.next
  }
}

return dummy.next
