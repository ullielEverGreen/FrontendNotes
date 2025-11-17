// 请你编写一个异步函数，它接收一个正整数参数 millis ，并休眠 millis 毫秒。
// 要求此函数可以解析任何值。
// 请注意，实际睡眠持续时间与 millis 之间的微小偏差是可以接受的。

/**
 * @param {number} millis
 * @return {Promise}
 */
async function sleep(millis) {
  return new Promise(resolve => { setTimeout(resolve, millis) })
}

/** 
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */