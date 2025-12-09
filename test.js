const test1 = async () => {
  new Promise((resolve) => {
    setTimeout(() => {
      console.log('test1')
      resolve()
    }, 1000)
  })
}
const test2 = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('test2')
      resolve('???')
    }, 1000)
  })
}

const execute = async () => {
  const a = await test1()
  console.log('a', a)
  const b = await test2()
  console.log('b', b)
}

execute()