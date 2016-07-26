#运算符(Operators)
### 运算符优先级
下表运算符优先级，从最高到最低：
```stylus
[]
! ~ + -
is defined
** * / %
+ -
... ..
<= >= < >
in
== is != is not isnt
is a
&& and || or
?:
= := ?= += -= *= /= %=
not
if unless
```

### 一元运算符
以下一元运算符可用，!, not, -, +, 以及~.

### 二元运算符
下标运算符[]允许我们通过索引获取表达式内部值。括号表达式可以充当元组（如(15px 5px), (1, 2, 3)）

### 范围.. ...
同时提供包含界线操作符(`..`)和范围操作符(`...`)，见下表达式：
```stylus
1..5
// => 1 2 3 4 5
1...5
// => 1 2 3 4
```
[more](https://github.com/fengyun2/stylus-tutorial/tree/dev/src/stylus/Operators.styl)

### 加减: + -
二元加乘运算其单位会转化，或使用默认字面量值。例如，5s - 2px结果是3s.
```stylus
15px - 5px
// => 10px

5 - 2
// => 3

5in - 50mm
// => 3.031in

5s - 1000ms
// => 4s

20mm + 4in
// => 121.6mm

"foo " + "bar"
// => "foo bar"

"num " + 15
// => "num 15"
```

### 乘除: / * %
```stylus
2000ms + (1s * 2)
// => 4000ms

5s / 2
// => 2.5s

4 % 2
// => 0
```

当在属性值内使用/时候，你`必须`用括号包住。否则/会根据其字面意思处理（支持CSS的line-height）。
```stylus
font: (14px/1.5)
// 等同于 14px ÷ 1.5

```
只有/操作符的时候需要这样。

### 指数：**
```stylus
2**8
// => 256
```

### 相等与关系运算：== != >= <= > <
相等运算符可以被用来等同单位、颜色、字符串甚至标识符。这是个强大的概念，甚至任意的标识符（例如wahoo）可以作为原子般使用。函数可以返回yes和no代替true和false（虽然不建议）

### 真与假
Stylus近乎一切都是true, 包括有后缀的单位，甚至0%, 0px等都被认作true.
不过，0在算术上本身是false.
表达式（或“列表”）长度大于1被认为是真。
true例子：
```stylus
0% 
0px
1px 
-1
-1px
hey
'hey'
(0 0 0)
('' '')
```
false例子：
```stylus
0 
null
false
''
```

### 逻辑操作符：&& || 和 or
逻辑操作符&&和||别名是and / or。它们优先级相同。

### 存在操作符：in
检查左边内容是否在右边的表达式中。
* 简单的例子：
```stylus
nums = 1 2 3
1 in nums
// => true

5 in nums
// => false
```
* 混合书写适用例子：
```stylus
pad(types = padding, n = 5px)
  if padding in types
    padding n
  if margin in types
    margin n

body
  pad()

body
  pad(margin)

body
  pad(padding margin, 10px)
```

### 条件赋值：?= :=
条件赋值操作符?=（别名?:）让我们无需破坏旧值（如果存在）定义变量。该操作符可以扩展成三元内is defined的二元操作。
例如，下面这些都是平起平坐的：
```stylus
color := white
color ?= white
color = color is defined ? color : white
```

### 实例检查：is a
Stylus提供一个二元运算符叫做`is a`, 用做类型检查。
```stylus
15 is a 'unit'
```
* 另外，我们可以使用`type()`这个内置函数。
```stylus
type(#fff) === 'rgba'
```
注意：`color`是唯一的特殊情况，当左边是`RGBA`或者`HSLA`节点时，都为`true`.

### 变量定义：is defined
此伪二元运算符右边空荡荡，左边无计算。用来检查变量是否已经分配了值。
```stylus
foo is defined
// => false

foo = 15px
foo is defined
// => true

#fff is defined
// => 'invalid "is defined" check on non-variable #fff'
```

### 三元(好像有问题, 我用 := or ?= 替代)
三元运算符的运作正如大部分语言里面的那样。三个操作对象的操作符（条件表达式、真表达式以及假表达式）。
```stylus
num = 15
num ? unit(num, 'px') : 20px
// => 15px
```

### 铸造
作为替代简洁的内置`unit()`函数，语法(expr) unit可用来强制后缀。
```stylus
body
  n = 5
  foo: (n)em
  foo: (n)%
  foo: (n + 5)%
  foo: (n * 5)px
  foo: unit(n + 5, '%')
  foo: unit(5 + 180 / 2, deg)
```

### 颜色操作
颜色操作提供了一个简洁，富有表现力的方式来改变其组成

### 格式化字符串
格式化字符串模样的字符串%可以用来生成字面量值，通过传参给内置`s()`方法
