# 变量(Variables)
---

### 变量
---
我们可以指定表达式为变量，然后在我们的样式中贯穿使用
```stylus
font-size = 14px

body
  font font-size Arial, sans-seri
```
* 变量甚至可以组成一个表达式列表：
```stylus
font-size = 14px
font = font-size "Lucida Grande", Arial

body
  font font sans-serif
```
* 标识符（变量名，函数等），也可能包括$字符
```stylus
$font-size = 14px
body {
  font: $font-size sans-serif;
}
```

### 属性查找
---
Stylus有另外一个很酷的独特功能，不需要分配值给变量就可以定义引用属性。
```stylus
#logo
  position: absolute
  top: 50%
  left: 50%
  width: w = 150px
  height: h = 80px
  margin-left: -(w / 2)
  margin-top: -(h / 2)
```

我们不使用这里的变量w和h, 而是简单地前置`@`字符在属性名前来访问该属性名对应的值
```stylus
#logo
  position: absolute
  top: 50%
  left: 50%
  width: 150px
  height: 80px
  margin-left: -(@width / 2)
  margin-top: -(@height / 2)
```

另外使用案例是基于其他属性有条件地定义属性。在下面这个例子中，我们默认指定z-index值为1，但是，只有在z-index之前未指定的时候才这样：
```stylus
position()
  position: arguments
  z-index: 1 unless @z-index

#logo
  z-index: 20
  position: absolute

#logo2
  position: absolute
```
属性会“`向上冒泡`”查找堆栈直到被发现，或者返回null（如果属性搞不定）。下面这个例子，@color被弄成了blue.
```stylus
body
  color: red
  ul
    li
      color: blue
      a
        background-color: @color
```
