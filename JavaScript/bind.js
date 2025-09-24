// call 立即执行，临时改变this指向（一次性），后面正常传入参数列表

// apply 立即执行，临时改变this指向（一次性），第二个参数是数组

// bind 改变this指向后不会立即执行，会返回一个this指向永久改变的函数，在返回的函数被调用时执行

function fn(...args){
    console.log(this,args);
}
let obj = {
    myname:"张三"
}

const bindFn = fn.bind(obj); // this 也会变成传入的obj ，bind不是立即执行需要执行一次
bindFn(1,2) // this指向obj
// fn(1,2) // this指向window

// 实现过程：
// 1. 修改this指向
// 2. 动态传递参数
// 3. 兼容new关键字

// 是bind函数的第一个参数，表示要绑定的this值
function myBind(context) {
  // 判断调用对象是否为函数
  if (typeof this !== 'function') {
    throw new TypeError('Error')
  }
  // 获取除了第一个参数(context)之外的所有参数。
  const args = [...arguments].slice(1)
  // 这里的this指向调用myBind的函数
  const fn = this

  return function Fn() {
    return fn.apply(this instanceof Fn ? new fn(...arguments) : context, args.concat(...arguments))
  }
}