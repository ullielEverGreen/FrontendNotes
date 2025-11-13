### instanceOf

使用typeof判断引用数据类型时，会返回Object
此时使用instanceOf检测对象是否属于某个class

```js
// 手写instanceof

// prototype：主要用于函数对象（特别是构造函数）
// Object.getPrototypeOf：可用于任何对象
function myInstancneof(left, right) {
  let proto = Object.getPrototypeOf(left), // 获取对象的原型
  prototype = right.prototype // 获取构造函数的 prototype 对象

  // 判断构造函数的 prototype 对象是否在对象的原型链上
  while(true) {
    if (!proto) return false
    if (proto === prototype) return true

    proto = Object.getPrototypeOf(proto)
  }
}
```

