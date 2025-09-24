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