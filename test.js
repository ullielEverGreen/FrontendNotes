// -------- 链表 --------
// 02.07
const getIntersectionNode = (headA, headB) => {
  if (headA === null || headB === null) return null
  let p1 = headA, p2 = headB

  while(p1 !== p2) {
    p1 = p1 === null ? headB : p1.next
    p2 = p2 === null ? headA : p2.next
  }

  return p1
}

// 21
const mergeTwoLists = (list1, list2) => {
    const dummy = new ListNode(0)
    let p = dummy
    let p1 = list1, p2 = list2

    while (p1 !== null && p2 !== null) {
        if (p1.val < p2.val) {
            p.next = p1
            p1 = p1.next
        } else {
            p.next = p2
            p2 = p2.next
        }
        p = p.next
    }

    if (p1 !== null) {
        p.next = p1
    }
    if (p2 !== null) {
        p.next = p2
    }

    return dummy.next
}

// 203
const removeElements = (head, val) => {
  const dummy = new ListNode(0)
  dummy.next = head
  let current = dummy

  while(current.next !== null) {
    if (current.next.val === val) {
      current.next = current.next.next
    } else {
      current = current.next
    }
  }

  return dummy.next
}

// 206
const reverseList = (head) => {
  let prev = null

  let current = head

  while(current !== null) {
    const temp = current.next
    current.next = prev
    prev = current
    current = temp
  }
  return prev
}

// 142
const detectCycle = (head) => {
  if (head === null || head.next === null) return null

  let slow = head, fast = head

  while(fast !== null && fast.next !== null) {
    slow = slow.next
    fast = fast.next.next

    if (slow === fast) {
      let pointer = head

      while(pointer !== slow) {
        slow = slow.next
        pointer = pointer.next
      }

      return pointer
    }
  }

  return null
}

// -------- 动态规划 --------

// 70
const climbStairs = (n) => {
  if (n <= 2) return n

  const dp = new Array(n).fill(0)

  dp[0] = 1
  dp[1] = 2

  for (let i = 2; i < n; i++) {
    dp[i] = dp[i-1] + dp[i-2]
  }

  return dp[n-1]
}

// 198
const rob = (nums) => {
  if (!nums.length) return 0
  if (nums.length === 1) return nums[0]

  const dp = new Array(nums.length)

  dp[0] = nums[0]
  dp[1] = Math.max(nums[0], nums[1])

  for (let i = 2; i < nums.length; i++) {
    dp[i] = Math.max(dp[i-1], nums[i] + dp[i-2])
  }

  return dp[nums.length - 1]
}

// 322
const coinChange = (coins, amount) => {
  const dp = new Array(amount+1).fill(Infinity)

  dp[0] = 0

  for (let i = 1; i <= amount; i++) {
    for (let coin of coins) {
      if (i - coin >= 0) {
        dp[i] = Math.min(dp[i], dp[i - coin] + 1)
      }
    }
  }

  return dp[amount] === Infinity ? -1 : dp[amount]
}
const coins = [1, 2, 5], amount = 11

// 509
const fib = (n) => {
  const dp = new Array(n+1)
  dp[0] = 0
  dp[1] = 1
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i-2] + dp[i-1]
  }
  return dp[n]
}

// 118
const generate = (numRows) => {
  const dp = new Array(numRows).fill([])

  for (let row = 0; row < numRows; row++) {
    dp[row] =  new Array(row +1).fill(1)

    for (let col = 1; col < dp[row].length - 1; col++) {
      dp[row][col] = (dp[row-1][col-1] + dp[row-1][col])
    }
  }
  return dp
}