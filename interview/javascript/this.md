<Badge type="warning">内容编写中</Badge>

## 含义
1. this被自动定义在所有函数的作用域中
2. this可以隐式传递上下文

## 默认绑定
1. 当函数作为独立函数调用时（函数并不是一个对象的方法时），this指向全局对象。但当启动严格模式的情况下，this不会默认绑定到全局对象上，而是会绑定到undefined上。



## 隐式this绑定
可以通过对象内部的属性指向函数的方法，this将会绑定到这个对象上。对象属性引用链中只有上一层或者最后一层在调用栈中起作用

```javascript
function foo() {
  console.log(this.name)
}
var obj2 = {
  name: 'zzw',
  foo: foo
}
var obj1 = {
  obj2: obj2
}
obj1.obj2.foo()
```

## 显式this绑定
### call
1. 示例

```javascript
function tellName () {
  console.log(this.name)
}
var obj = {
  name: 'evan'
}
tellName.call(obj)
```

2. 装箱

当使用一个原始值时，

### apply
## 通过new关键字绑定this
