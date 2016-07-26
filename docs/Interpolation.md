# 插值(Interpolation)
---

###插值
---
Stylus支持通过使用`{}`字符包围表达式来插入值，其会变成标识符的一部分。例如，-webkit-{'border' + '-radius'}等同于-webkit-border-radius.
```stylus
vendor(prop, args)
  -webkit-{prop} args
  -moz-{prop} args
  {prop} args

border-radius()
  vendor('border-radius', arguments)

box-shadow()
  vendor('box-shadow', arguments)

button
  border-radius 1px 2px / 3px 4px
```

### 选择器插值
插值也可以在选择器上起作用
```stylus
table
  for row in 1 2 3 4 5
    tr:nth-child({row})
      height: 10px * row
```
