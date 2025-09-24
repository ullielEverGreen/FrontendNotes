// 事件循环：
// 1. JS是单线程，为了防止代码阻塞，我们把任务分为同步、异步
// 2. 同步代码交给js引擎执行，异步代码交给浏览器环境
// 3. 同步代码放入执行栈中，异步代码等待回调执行送入任务队列中排队
// 4. 执行栈执行完毕，会去任务队列查看是否有异步任务，有就送到执行栈执行，反复循环查看执行，这个过程是事件循环（event loop）

// 为什么是循环？每一个宏任务后，事件循环都会立即去检查并清空整个同步任务和微任务队列。

// 同步：立即放入js引擎（js主线程）执行，并原地等待结果
// 异步：先放入宿主环境（浏览器、NodeJs），不必原地等待结果，不阻塞主线程继续往下执行，异步结果在将来执行

// 宏任务的回调行为由浏览器、NodeJs发起
// 计时器属于浏览器的API，由浏览器将宏任务的回调放至宏任务队列中
// script、Ajax/Fetch、setTimeout、setInterval

// 微任务的回调行为由js引擎发起
// Promise本身为同步，then/catch的回调函数是异步

// -------------------------------------------------------

// console.log('script start'); // 同步任务

// setTimeout(function() {
//   console.log('setTimeout'); // 宏任务1的回调
//   Promise.resolve().then(function() {
//     console.log('promise in setTimeout'); // 微任务2
//   });
// }, 0);

// Promise.resolve().then(function() {
//   console.log('promise1'); // 微任务1
// }).then(function() {
//   console.log('promise2'); // 微任务1执行完后产生的新的微任务
// });

// console.log('script end'); // 同步任务

// script start
// script end
// promise1
// promise2
// setTimeout
// promise in setTimeout