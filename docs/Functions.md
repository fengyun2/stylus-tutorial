# 方法(Functions)
### 函数
Stylus强大之处就在于其内置的语言函数定义。其定义与混入(mixins)一致；却可以返回值。
### 返回值
很简单的例子，两数值相加的方法：
```stylus
add(a, b)
    a+b
```
我们可以在特定条件下使用该方法，如在属性值中：
```stylus
body 
  padding add(10px, 5)
```

### 默认参数
可选参数往往有个默认的给定表达。在Stylus中，我们甚至可以超越默认参数。
```stylus

add(a, b = a)
  a + b

add(10, 5)
// => 15

add(10)
// => 20
```
注意：因为参数默认是赋值，我们可可以使用函数调用作为默认值。
```stylus
add(a, b = unit(a, px))
  a + b
```

### 函数体
我们可以把简单的add()方法更进一步。通过内置unit()把单位都变成px, 因为赋值在每个参数上，因此，我们可以无视单位换算。
```stylus
add(a, b = a)
  a = unit(a, px)
  b = unit(b, px)
  a + b

add(15%, 10deg)
// => 25
```
### 多个返回值
Stylus的函数可以返回多个值，就像你给变量赋多个值一样
```stylus
sizes()
 15px 10px

sizes()[0]
// => 15px
```

### 条件

### 别名
给函数起个别名，和简单，直接等于就可以了。

### 变量函数
我们可以把函数当作变量传递到新的函数中。
```stylus
invoke(a, b, fn)
  fn(a, b)

add(a, b)
  a + b
sub(a, b)
  a - b
body
  padding invoke(5px, 10px, add)
  margin invoke(5px, 10px, sub)
```

### 参数
`arguments`是所有函数体都有的局部变量，包含传递的所有参数。
```stylus
sum()
  n = 0
  for num in arguments
    n = n + num

sum(1,2,3,4,5)
// => 15
```

### 哈希示例

```stylus
get(hash, key)
  return pair[1] if pair[0] == key for pair in hash
  
下面例子可以证明，语言函数模样的Stylus表达式具有更大的灵活性。
hash = (one 1) (two 2) (three 3)

get(hash, two)
// => 2

get(hash, three)
// => 3

get(hash, something)
// => null

```
