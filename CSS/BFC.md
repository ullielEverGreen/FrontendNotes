# BFC 块级格式化上下文
`BFC`（Block Formatting Context）  
目的是形成一个相对于外界完全独立的空间，让内部的子元素不会影响到外部的元素

***
### 触发条件
1. 根元素：HTML
2. 浮动元素：float值为left、right
3. overflow值不为visible
4. display的值为inline-block、inltable-cell、table-caption、table、inline-table、flex、inline-flex、grid、inline-grid
5. position的值为absolute或fixed。  
***
### 应用场景  
1. 防止margin重叠

```html
<body>
  <div class="container bfc">
    <div class="content">content</div>
  </div>
  <div class="container bfc">
    <div class="content">content</div>
  </div>
</body>

<style>
  .content {
    color: #f55;
    background: #fcc;
    width: 200px;
    line-height: 100px;
    text-align:center;
    margin: 100px;
  }

  .bfc {
    overflow: hidden;
  }
</style>
```

2. 解决高度塌陷问题（清除内部浮动）
```html
<body>
  <div class="container bfc">
    <div class="content"></div>
  </div>
</body>

<style>
  .container {
    border: 1px solid black;
  }
  .bfc {
    overflow: hidden;
  }
  .content {
    background: #fcc;
    width: 100px;
    height: 100px;
    float: right;
  }
</style>
```
3. 防止浮动元素覆盖

