# call、apply、bind

## call
立即执行，临时改变this指向（一次性），后面正常传入参数列表

## apply
立即执行，临时改变this指向（一次性），第二个参数是数组

## bind
改变this指向后不会立即执行，会返回一个this指向永久改变的函数，在返回的函数被调用时执行

```js
function fn(...args) {
  console.log(this, args)
}

fn(1,2) // this指向window

const obj = {
  name: 'ully'
}

const bindFn = fn.bind(obj) // this会变成传入的obj
bindFn(1，2) // this指向obj
// 输出 { name: 'ully' } [ 1, 2 ]
```

### bind实现过程
1. 修改this指向
2. 动态传递参数
3. 兼容 `new` 关键字


### 手写bind代码
```js
Function.protoType.myBind = function(context) {
  if (typeof this !== 'function') {
    throw new TypeError('必须使用函数调用myBind')
  }

  const fn = this,
  args = [...arguments].slice(1)

  return function Fn() {
    // 通过new调用
    if (this instanceof Fn) {
      return new fn(...args, ...arguments)
    } else { // 普通调用
      return fn.apply(context, [...args, ...arguments])
    }
  }
}
```

### 普通调用
```js
function showInfo(name, age, city) {
  console.log(`Name: ${this.name}, Age: ${age}, City: ${city}`);
}

const me = { name: 'ully'}

// 调用方法一
const myInfo1 = showInfo.myBind(me, 28, 'shanghai')
myInfo1()

// 调用方法二
const myInfo2 = showInfo.myBind(me, 28)
myInfo2('shanghai')

// this 指向context
// this instanceof Fn 为 false

```

### `new` 关键字调用
```js
function Person(name, age) {
  this.name = name
  this.age = age
  console.log(this.name + this.age)
}

const BoundPerson = Person.myBind(null, 'ully', 28)
const personObj = new BoundPerson()

// this 指向新创建的实例对象 personObj
// 这个实例是通过 BoundPerson() 创建的
// this instanceof Fn 为 true（Fn就是BoundPerson）
```