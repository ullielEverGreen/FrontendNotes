# var、let、const

`var`：可重复声明，后面声明的变量会覆盖前面声明的变量  
`let`：可读可写  
`const`：只读的常量，变量指向的内存地址所保存的数据不可改动  

### 变量提升
`var` 存在变量提升，也就是说，变量可以在声明前调用。   
`let` 和 `const` 不存在变量提升，所以一定要声明后才能调用。  

### 暂时性死区
`var` 不存在暂时性死区  
`let` 和 `const` 存在暂时性死区，只能等变量声明了以后，才能获取并使用变量。  

```js
console.log(a) // undefined
var a = 10

console.log(a) // Cannot access 'b' before initialization
let b = 20

console.log(a) // Cannot access 'c' before initialization
const c = 30
```

### 块级作用域
`var` 不存在块级作用域  
`let` 和 `const` 存在块级作用域  

### 重复声明
`var` 允许重复声明变量  
`let` 和 `const` 在同一作用域中，不允许重复声明变量  

### 修改声明的变量
`var` 和 `let` 允许修改变量的值  
`const` 一旦声明好，就不允许修改  