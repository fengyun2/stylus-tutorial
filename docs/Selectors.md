# 选择器(Selectors)
---
### 缩排(Indentation)
---
Stylus蛮“玄幻”的(如基于缩进)，空格有重要的意义，所以，我们使用缩排和凹排代替花括号{以及}
```stylus
body 
    color white
```
#### 规则集
---
Stylus就跟CSS一样，允许你使用`逗号`为多个选择器同时定义属性
```stylus
textarea, input
  border 1px solid #eee
```
#### 父级引用
---
字符&指向父选择器

####消除歧义
---
类似padding - n的表达式可能既被解释成减法运算，也可能被释义成一元负号属性。为了避免这种歧义，用括号包裹表达式：
```stylus
pad(n)
  padding (- n)

body
  pad(5px)
```
