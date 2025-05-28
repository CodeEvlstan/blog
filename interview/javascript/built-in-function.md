
<Badge type="warning">内容编写中</Badge>

在JavaScript中，内置函数主要包括：

1. String()
2. Number()
3. Boolean()
4. Array()
5. Object()
6. Function()
7. RegExp()
8. Date()
9. Error()
10. Symbol()
11. BigInt()

```javascript
var a = new String('abc') // 通过这种形式创建的是字符串'abc'的封装对象，而非基本类型值'abc'
```

## Object.Prototype.toString()与内部属性[[Class]]
通过调用这个方法我们可以得到类似'[object Array]'的形式，来确定一个变量为数组类型

## 内置函数的使用
### 使用：
一般不推荐使用内置函数去声明变量，他们有的时候会造成意想不到的效果。而且通过内置函数去声明变量会造成性能上的损失。

```javascript
/*
在 JavaScript 中，通过 new Boolean() 构造函数创建的布尔对象是一个对象，而不是原始的布尔值。虽然它代表着布尔值的 true 或 false，但是这个对象本身在布尔上下文中是 "truthy"。
*/
var bool = new Boolean(false) // 这样声明的值也是truthy
```

### valueof
通过valueof()函数可以得到封装对象中的基本类型的值

## 箭头函数的实现
在ES6新增的箭头函数中，

