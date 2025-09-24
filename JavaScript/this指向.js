// 1. 默认绑定（直接调用）

// 独立调用，无任何执行上下文，非严格模式下，浏览器中指向windows，nodejs环境中指向global对象。严格模式下，this为undefined。

function showThis() {
  console.log(this)
}

// 非严格模式
showThis() // 输出: Window {...} (浏览器环境)

// 2. 隐式绑定（方法调用）

// 当函数作为一个对象的方法被调用时，this指向调用这个方法的对象。

const stu = {
  name: 'ully',
  age: 28,
  talk: function() {

    console.log(this.name + ' is talking')
  }
}

stu.talk()

// 3. 显式绑定（call，apply，bind）

// call 和 apply：立即调用函数，并指定函数内的 this 指向第一个参数。它们的区别在于后续传参方式不同（call 是参数列表，apply 是参数数组）。
// bind：不会立即调用函数，而是返回一个新的函数，这个新函数的 this 被永久绑定到指定的对象。
function introduce(lang1, lang2) {
  console.log(`My name is ${this.name} and I code in ${lang1} and ${lang2}`);
}

const developer = { name: 'Bob' };

// 使用 call
introduce.call(developer, 'JavaScript', 'Python');
// 输出: "My name is Bob and I code in JavaScript and Python"

// 使用 apply
introduce.apply(developer, ['Java', 'C++']);
// 输出: "My name is Bob and I code in Java and C++"

// 使用 bind (创建一个新函数，this 永久绑定为 developer)
const boundIntroduce = introduce.bind(developer, 'Go', 'Rust');
boundIntroduce(); // 输出: "My name is Bob and I code in Go and Rust"

// 4. new 绑定（构造函数调用）
// 当使用 new 关键字调用一个构造函数时，this 会指向新创建的这个实例对象。

function Cat(name) {
  this.name = name
  this.play = function() {
    console.log(this, this.name + ' is playing')
  }
}

const cat1 = new Cat('haidan')
const cat2 = new Cat('naipao')

cat1.play()

// 5. 箭头函数
// 箭头函数没有自己的this。它内部的this值继承自外层（定义时所在的作用域）第一个普通函数的this

const person = {
  name: 'ully',
  tasks: ['task1', 'task2'],

  showTask: function() {
    console.log(this)
    this.tasks.forEach(task => {
      console.log(this.name + ' needs to do: ' + task)
    })
  }
}

person.showTask()

// 6. DOM事件处理函数中的this
// 在 DOM 事件处理函数中（无论是 onclick 还是 addEventListener），this 通常指向绑定事件的那个 DOM 元素。

// 优先级
// 判断 this 指向时，可以按以下优先级顺序思考（从高到低）：

// new 绑定：var obj = new Foo() -> this 指向新对象 obj。

// 显式绑定：foo.call(bar) -> this 指向 bar。

// 隐式绑定：obj.foo() -> this 指向 obj。

// 默认绑定：foo() -> 非严格模式指向全局对象，严格模式为 undefined。

// 箭头函数的 this 是例外，它无视这些规则，直接由词法作用域决定。