# Ajax

### 原理
通过 `XMLHttpRequest` 对象来向服务器发异步请求，从服务器获取数据，然后用 `js` 来操作DOM更新页面

### 实现过程
1. 创建Ajax的核心 `XMLHttpRequest` 对象
2. 通过 `XMLHttpRequest` 对象的 `open()` 方法与服务器建立连接
3. 构建请求所需的数据内容，并通过  `XMLHttpRequest` 对象的 `send()` 方法发送给服务器端
4. 通过 `XMLHttpRequest` 对象提供的 `onreadystatechange` 事件监听服务器端的通信状态
5. 接收并处理服务端向客户端响应的数据处理
6. 将结果更新到 `HTML` 页面中

### 代码
```js
const Ajax = (options) => {
  //创建XMLHttpRequest对象
  const xhr = new XMLRequest()

  // 初始化参数内容
  const options = options || {}
  options.type = (options.type || 'GET').toUpperCase()
  options.dataType = options.dataType || 'json'
    xhr.send(params)
  const parmas = options.data

  // xhr.open 接收三个主要参数：请求方法（如"GET"、"POST"），请求的URL，
  // 以及一个布尔值，指示请求是否应异步执行（默认值为异步）
  if (options.type ==='GET') {
    xhr.open('GET', options.url + '?' + parmas, true)
    xhr.send(null)
  } else if (options.type === 'POST') {
    xhr.open('POST', options.url, true)
    xhr.send(params)
  }

  // 接收

  // onreadystatechange 存储函数（或函数名），每当 readyState 属性改变时，就会调用该函数。
  xhr.onreadystatechange(() => {
    // readyState存有 XMLHttpRequest 的状态
    // 0: 请求未初始化
    // 1: 服务器连接已建立
    // 2: 请求已接收
    // 3: 请求处理中
    // 4: 请求已完成，且响应已就绪
    if (xhr.readyState === 4) {
      const status = xhr.status
      if (status >= 200 & status < 300) {
        options.success && options.success(xhr.responseText, xhr.responseXML)
      } else {
        options.fail && options.fail(status)
      }
    }
  })
  
}
```

```js
Ajax({
  type: 'POST',
  dataType: 'json',
  data: {},
  url: 'https://xxxx',
  success: (text, xml) => {
    console.log(text, xml)
  },
  fail: (status) => {
    console.log(status)
  }
})
```