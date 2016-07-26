# 混合书写(Mixins)
### 混入
混入和函数定义方法一致，但是应用却大相径庭。
例如，下面有定义的border-radius(n)方法，其却作为一个mixin（如，作为状态调用，而非表达式）调用。
当border-radius()选择器中调用时候，属性会被扩展并复制在选择器中。
```stylus
border-radius(n)
  -webkit-border-radius n
  -moz-border-radius n
  border-radius n

form input[type=button]
  border-radius(5px)
```

### 父级引用
```stylus
stripe(even = #fff, odd = #eee)
 tr
   background-color odd
   &.even
   &:nth-child(even)
       background-color even
然后，利用混合书写，如下：
table
  stripe()
  td
    padding 4px 10px

table#users
  stripe(#303030, #494848)
  td
    color white
```
