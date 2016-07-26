### 内置方法(Built-in Functions)
* push(expr, args…)
后面推送给定的`args`给`expr`.
```css
nums = 1 2
push(nums, 3, 4, 5)

nums
// => 1 2 3 4 5
```
别名为append().
* unshift(expr, args…)
起始位置插入给定的`args`给`expr`.
```css
nums = 4 5
unshift(nums, 3, 2, 1)

nums
// => 1 2 3 4 5
```
别名为prepend().
* keys(pairs)
返回给定pairs中的键(pairs必须是对象)。
```css
pairs = (one 1) (two 2) (three 3)
keys(pairs)
// => one two three
```
* values(pairs)

返回给定pairs中的值。
```css
pairs = (one 1) (two 2) (three 3)
values(pairs)
// => 1 2 3
```
* typeof(node)
字符串形式返回node类型。
```css
type(12)
// => 'unit'

typeof(12)
// => 'unit'

typeof(#fff)
// => 'rgba'

type-of(#fff)
// => 'rgba'
```
别名有`type-of`和`type`.

* unit(unit[, type])
返回unit类型的字符串或空字符串，或者赋予type值而无需单位转换。
```css
unit(10)
// => ''

unit(15in)
// => 'in'

unit(15%, 'px')
// => 15px

unit(15%, px)
// => 15px
```
* match(pattern, string)
检测string是否匹配给定的pattern.
```css
match('^foo(bar)?', foo)
match('^foo(bar)?', foobar)
// => true

match('^foo(bar)?', 'foo')
match('^foo(bar)?', 'foobar')
// => true

match('^foo(bar)?', 'bar')
// => false
```

* image-size(path)
返回指定path图片的width和height. 向上查找路径的方法和@import一样，paths设置的时候改变。
```css
width(img)
  return image-size(img)[0]

height(img)
  return image-size(img)[1]

image-size('tux.png')
// => 405px 250px

image-size('tux.png')[0] == width('tux.png')
// => true
```
