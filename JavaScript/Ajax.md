# Ajax

### 原理
通过 `XMLHttpRequest` 对象来向服务器发异步请求，从服务器获取数据，然后用js来操作DOM更新页面

### 实现过程
1. 创建Ajax的核心 `XMLHttpRequest` 对象
2. 通过 `XMLHttpRequest` 对象的 `open()` 方法与服务器建立连接
3. 构建请求所需的数据内容，并通过  `XMLHttpRequest` 对象的 `send()` 方法发送给服务器端
4. 通过 `XMLHttpRequest` 对象提供的 `onreadystatechange` 事件监听服务器端的通信状态
5. 接收并处理服务端向客户端响应的数据处理
6. 将结果更新到 `HTML` 页面中

### 代码
```js
const ajax = function(options) {
    //创建XMLHttpRequest对象
    const xhr = new XMLHttpRequest() 

    // 初始化参数内容
    const options = options || {}
    options.type = (options.type || 'GET').toUpperCase()
    options.dataType = options.dataType || 'json'
    const params = options.data

    
    // xhr.open 接收三个主要参数：请求方法（如"GET"、"POST"），请求的URL，
    // 以及一个布尔值，指示请求是否应异步执行（默认值为异步）
    if (options.type === 'GET') {
        xhr.open('GET', options.url + '?' + params, true)
        xhr.send(null)
    } else if (options.type === 'POST') {
        xhr.open('POST', options.url, tue)
        xhr.send(params)
    }

    // 接收
    xhr.onreadystatechange(() => {
        if (xhr.readyState === 4) {
            let status = xhr.status
            if (status >= 200 && status < 300) {
                options.success && options.success(xhr.responseText, xhr.responseXML)
            } else {
                options.fail && options.fail(status)
            }
        }
    })
}
```
```js
ajax({
    type: 'post',
    dataType: 'json',
    data: {},
    url: 'https://xxx',
    success: (text, xml) => {
        
    },
    fail: (status) => {
        console.log(status)
    }
})
```
