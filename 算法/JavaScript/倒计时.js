const str = '00:00:03'

const getCountdown = (str) => {
  let h = Number(str.split(':')[0])
  let m = Number(str.split(':')[1])
  let s = Number(str.split(':')[2])

  const timer = setInterval(() => {

    console.log((h < 10 ? '0' + h : h) + ':' + (m < 10 ? '0' + m : m ) + ':' + (s < 10 ? '0' + s : s))


    if (h === 0 && m === 0 && s === 0) {
      console.log('倒计时结束')
      clearInterval(timer)
    }

    s--
    
    if (s < 0) {
      s = 59
      m--
    }

    if (m < 0) {
      m = 59
      h--
    }
  }, 1000)
}
