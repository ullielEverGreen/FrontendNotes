# 防抖
n 秒后在执行该事件，若在 n 秒内被重复触发，则重新计时

### 应用场景

n秒后打印输入框结果，当输入全部完成后，才打印最终结果。

```js
const debounce = (fn, wait) => {
  let timer
  
  return function() {
    // 上来就先把计时器清除，开启新的倒计时
    clearTimeout(timer)

    timer = setTimeout(() => {
      fn()
    }, wait)
  }
}
```