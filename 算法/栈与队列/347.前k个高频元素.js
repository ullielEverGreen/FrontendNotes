// 给你一个整数数组 nums 和一个整数 k ，请你返回其中出现频率前 k 高的元素。
// 你可以按 任意顺序 返回答案。

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
// 最小堆 时间复杂度 O(n logk)
var topKFrequent = function(nums, k) {
  const frequencyMap = new Map()

  for (let num of nums) {
    frequencyMap.set(num, (frequencyMap.get(num) || 0)+1)
  }

  const arr = Array.from(frequencyMap.entries())

  const heap = []

  for (let i = 0; i < arr.length; i++) {
    const [num, freq] = arr[i]

    if (heap.length < k) {
      heap.push([num, freq])
      heapifyUp(heap, heap.length-1)
    } else if (freq > heap[0][1]) {
      heap[0] = [num, freq]
      heapifyDown(heap, 0)
    }
  }

  return heap.map(item => item[0])
}

// 向上调整
function heapifyUp(heap, index) {
  while (index > 0) {
    const parentIndex = Math.floor((index - 1) / 2);
    if (heap[parentIndex][1] <= heap[index][1]) break;
    
    [heap[parentIndex], heap[index]] = [heap[index], heap[parentIndex]];
    index = parentIndex;
  }
}

// 向下调整
function heapifyDown(heap, index) {
  const length = heap.length;
  
  while (true) {
    let left = 2 * index + 1;
    let right = 2 * index + 2;
    let smallest = index;
    
    if (left < length && heap[left][1] < heap[smallest][1]) {
        smallest = left;
    }
    
    if (right < length && heap[right][1] < heap[smallest][1]) {
        smallest = right;
    }
    
    if (smallest === index) break;
    
    [heap[index], heap[smallest]] = [heap[smallest], heap[index]];
    index = smallest;
  }
}

// 桶排序 时间复杂度 O(n)
var topKFrequent1 = function(nums, k) {
  const frequencyMap = new Map()

  for (let num of nums) {
    frequencyMap.set(num, (frequencyMap.get(num) || 0)+1)
  }

  // 创建桶数组（索引表示频率）
  const buckets = []
  for (let i = 0; i <= nums.length; i++) {
    buckets[i] = []
  }

  // 将数字放入对应频率的桶中
  for (let [num, freq] of frequencyMap) {
    buckets[freq].push(num)
  }

  const result = []

  // 从高频率到低频率收集结果
  for (let i = buckets.length - 1; i >= 0; i--) {
    if (result.length < k && buckets[i].length > 0) {
      result.push(...buckets[i])
    }
  }

  return result.slice(0, k)
}

// 时间复杂度 O(n logn)
var topKFrequent2 = function(nums, k) {
  const res = []
  const map = new Map()
  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], (map.get(nums[i]) || 0) + 1)
  }
  const sortedArr = [...map.entries()].sort((a, b) => b[1] - a[1])
  
  for (let i = 0; i < k; i++) {
    res.push(sortedArr[i][0])
  }

  return res
};

const nums = [1,2,1,2,1,2,3,1,3,2], k = 2
console.log(topKFrequent1(nums, k))