// 给定一个数组 prices ，它的第 i 个元素 prices[i] 表示一支给定股票第 i 天的价格。
// 你只能选择 某一天 买入这只股票，并选择在 未来的某一个不同的日子 卖出该股票。设计一个算法来计算你所能获取的最大利润。
// 返回你可以从这笔交易中获取的最大利润。如果你不能获取任何利润，返回 0 。

 /**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let maxProfit = 0
  for (let i = 0; i < prices.length; i++) {
    let currentProfit = 0
    for (let j = i+1; j < prices.length; j++) {
      if (prices[j] > prices[i]) {
        currentProfit = Math.max(currentProfit, prices[j] - prices[i])
      }
    }

    maxProfit = Math.max(maxProfit, currentProfit)
  }

  return maxProfit
};

var maxProfit = function(prices) {
  let left = 0
  let right = prices.length - 1

  let maxProfit = 0

  while(left < right) {
    
  }
}

const prices = [7,6,4,3,1]
console.log(maxProfit(prices))