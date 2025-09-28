# CSS如何画一个三角形？

通过长宽为0的块元素，并设置border来构建三角形。

```css
/* 获得4个高度为100px的三角形构成的长宽为200px的正方形 */
.tiangle {
  width: 0;
  height:0;
  border: 100px solid;
  border-color: red green blue yellow;
}

/* 通过设置transparent保留一个高度为50px的三角形 */
.tiangle {
  width: 0;
  height:0;
  border-top: 50px solid transparent;
  border-left: 50px solid transparent;
  border-right: 50px solid transparent;
  border-bottom: 50px solid red;
}
```