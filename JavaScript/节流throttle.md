# 节流 throttle
n 秒内只运行一次，若在 n 秒内重复触发，只有一次生效

### 应用场景
多次点击图片，只作一次交互

```js
function throttle(fn, delay) {
  let timer
  return function() {
    if (!timer) {
      timer = setTimeout(() => {
        fn()
        timer = null
      }, delay)
    }
  }
}
```