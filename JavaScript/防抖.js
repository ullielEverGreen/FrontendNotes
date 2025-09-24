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