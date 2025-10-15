// 给你一个正整数 n ，生成一个包含 1 到 n2 所有元素，
// 且元素按顺时针顺序螺旋排列的 n x n 正方形矩阵 matrix 。

/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
  const matrix = Array(n).fill(0).map(i => Array(n).fill(0))
  
  // 按照行列矩阵来确定方向（类似第四象限），并非笛卡尔坐标系
  const directions = [[0,1], [1,0], [0,-1], [-1,0]] // 右 下 左 上
  let directionIndex = 0

  let row = 0, col = 0
  let num = 1

  while(num <= n*n) {
    matrix[row][col] = num
    
    num++

    const nextRow = row + directions[directionIndex][0]
    const nextCol = col + directions[directionIndex][1]

    // 如果下一个位置越界或者已填充过，就改变方向
    // 必须先判断边界，再判断值，否则可能越界访问
    if (nextRow < 0 || nextRow >= n || nextCol < 0 || nextCol >= n || matrix[nextRow][nextCol] !== 0) {
      directionIndex = (directionIndex + 1) % 4
    } 
    
    row += directions[directionIndex][0]
    col += directions[directionIndex][1]
  }
  return matrix
};

const n = 3
console.log(generateMatrix(n))

// [
//   [1,2,3],
//   [8,9,4],
//   [7,6,5]
// ]

// arr[0][0] = 1
// arr[0][1] = 2
// arr[0][2] = 3

// arr[1][0] = 8
// arr[1][1] = 9
// arr[1][2] = 4

// arr[2][0] = 7
// arr[2][1] = 6
// arr[2][2] = 5
