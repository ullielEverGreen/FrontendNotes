// new 操作符用于创建一个给定构造函数的实例对象

// new关键字主要做了以下的工作：
// 1.创建一个新的对象obj

// 2.将对象与构建函数通过原型链连接起来

// 3.将构建函数中的this绑定到新建的对象obj上

// 4.根据构建函数返回类型作判断，如果是原始值则被忽略，如果是返回对象，需要正常处理

function myNew(Func, ...args) {
  // 写法一
  const obj = {}

  obj.__proto__ = Func.protoType

  // 写法二 创建一个新对象，并将其原型指向构造函数的prototype
  const obj1 = Object.create(Func.prototype);

  const res = Func.apply(obj, args)

  return res instanceof Object ? res: obj
}

Func.apply(obj, args)

const res = Func()

function mymyNew(Func, ...args) {
  const obj = {}

  obj.__proto__ = Func.protoType

  const res = Func.apply(obj, args)
  console.log('res', res)
  return res instanceof Object ? res : obj
}


function Person(name, age) {
  this.name = name
  this.age = age
}

const stu = mymyNew(Person, 'ully', 23)

console.log(stu)