<Badge type="warning">内容编写中</Badge>
::: tip
内容编写中...
:::

### 数据类型分类
javascript数据类型分为

  - **undefined：** 表示变量未初始化。一个变量声明后但未赋值时，它的默认值是 `undefined`.
  - **Null：** 表示一个空的值或一个不存在的对象。`null` 是一个特殊的关键字，它代表“无值”
  - **Boolean：** 只有两个值:`true` 和 `false`，用于逻辑判断。
  - **Number：** 表示双精度 64 位二进制格式的浮点数，可以表示整数和浮点数。特殊值包括 `NaN(NotaNumber)`和 `Infinity`。
  - **String：** 表示字符序列，可以用单引号、双引号或反引号括起来的文本。
  - **Object：** 对象的本质就是一组数据和功能的集合
  - **Symbol：** : 创建后独一无二且不可变的数据类型，主要为了解决可能出现的全局变量冲突问题
  - **Bigint：** 可以表示任意精度格式的证书，使用Bigint可以安全地储存和操作大整数，即使这个数已经超过了Number能够表示的安全范围（`Number.Min_SAFE_INTEGER 负(2^53-1)`  到 `Number.MAX_SAFE_INTEGER (2^53-1)`）。

### 数据类型划分

按照数据存储方式的不同，可以分为原始类型（基本数据类型）和 引用类型（复杂数据类型）
- 基本数据类型包括（`undefined`, `Null`,`Boolean`,`Number`,`String`,`Symbol`,`Bigint`）
- 复杂数据类型 `Object`

#### 基本数据类型和复杂数据类型的区别
**储存区别**

- 原始类型存储在栈(stack)中，值直接保存在变量访问的位置，由于其大小固定目频繁使用存储在栈中具有更高的性能。
- 引用类型存储在堆(heap)中，占用空间较大且大小不固定，变量保存的是对实际对象的引用(即指针)，这些引用存储在栈中。

**赋值方式区别**

- 原始类型:复制的是值本身。例如，将一个 number 类型的变量赋值给另一个变量，两个变量互不影响。
- 引用类型:复制的是引用(指针)。多个变量引用同一个对象时，一个变量的修改会影响其他变量。

**堆和栈的区别**

- 栈:内存分配效率高,自动管理(由编译器分配和释放)。
- 堆:内存分配灵活,但需要由开发者手动管理内存(通过垃圾回收机制)。


### 数据类型的检测



1. 判断一个对象为空的手段
```javascript
JSON.stringify(obj) == {}
Object.keys(obj).length < 0
```
### 数据类型检测
### typeof操作符判断变量类型
```javascript
typeof variable  // 返回一个表示变量类型的字符串
```

```javascript:line-numbers {1}
// 声明不同类型的变量
const undefinedVar = undefined;
const booleanVar = true;
const numberVar = 42;
const stringVar = "Hello, world!";
const objectVar = { key: "value" };
const arrayVar = [1, 2, 3];
const functionVar = function() { console.log("Function!"); };
const symbolVar = Symbol("mySymbol");
const bigintVar = BigInt(123);

// 使用 typeof 运算符检查变量类型并打印结果
console.log(typeof undefinedVar);  // 输出: "undefined"
console.log(typeof booleanVar);    // 输出: "boolean"
console.log(typeof numberVar);     // 输出: "number"
console.log(typeof stringVar);     // 输出: "string"
console.log(typeof objectVar);     // 输出: "object"
console.log(typeof arrayVar);      // 输出: "object"
console.log(typeof functionVar);   // 输出: "function"
console.log(typeof symbolVar);     // 输出: "symbol"
console.log(typeof bigintVar);     // 输出: "bigint"

```

typeof undeclared 变量也会返回undefined

```javascript
if (typeof str !== 'undefined') {
  doSomething() // 安全获取str的值以后再进行代码的执行，防止未知错误的发生。
}
// 也可以通过判断window.str来进行安全校验，不过由于JS可以运行在多个平台，因此不建议使用这种形式
```

优点： 简单快速，适用于基本数据类型



2. instanceof  可以通过判断原型链上是否存在一个构造函数的prototype属性，从而判断这个引用类型的实际类型

优点： 



3. constructor 

优点



###  数据类型转换
JavaScript本身是一门动态类型语言，在进行类型转换时，可以通过显示类型转换来改变变量类型，也可以通过隐式类型转换来改变变量的类型，以下面这段代码为例

```javascript
var a = 42
var b = a + '' // 隐式类型转换
var c = String(a) // 显式类型转换n'j
```

为了代码的可读性，最好写一些明确表明进行数据类型转换的代码。

### 显式类型转换
#### toString() / String()
1. 这两种方式都可以将值转换为字符串。
2. undefined 和 null  调用toString()，因为原型链上没有这个方法，因此会报错。
3. String(undefined) 或 Stinrg(null) 会得到字符串  'null' 和  'undefined'

#### falsy / truthy
1. Falsy

```javascript
// undefined
// null 
// false
// +0 -0 NaN
// '' 
```

2. Falsy Object

#### 字符串和数字之间的显示
字符串转数字

```javascript
// 1
var a = '3.14'
var b = Number(a)
var c = +a
```

数字转字符串

```javascript
// 1
var a = 42
var b = String(a)
var c = a.toString()
```

### 隐式类型转换






## 数据类型的声明
1. const 声明的变量是变量的内存地址不能发生改变，因此基本数据类型的值是不能改变的。而引用数据类型的指针可以对堆里的数据进行改变。
2. new操作符的实现步骤
    1. 创建一个对象
    2. 将对象的__proto__属性指向构造函数的prototype属性
    3. 指向构造函数中的代码，构造函数中的this指向该对象。（为这个对象添加属性和方法）
    4. 返回新的对象

箭头函数不能执行上述的第二部和第三步，因为他没有prototype,有没有自己的this指向，更不可以使用argument参数。所以不能new一个箭头函数。而箭头函数中的this是捕获上下文的，并没有自己的this

```javascript
var obj = {
  getArrow: function getArrow () {
    var _this = this
    return function () {
      console.log(_this === obg)
    }
  }
}
```

## 深拷贝和浅拷贝的区别
浅拷贝拷贝的只是对象的内存地址，如果其中一个对象改变了这个地址就会影响到另一个对象

深拷贝是从内存中完整的拷贝出来，并在堆内存中重写开辟出一个地址，这样两个对象的修改，不互相影响。

1. 扩展运算符
    1. 如果参数是个对象，可以遍历出属性，拷贝到当前的接收对象中。相当于Object.assign()，是一种浅拷贝的形式。如果自定义的属性名称与扩展对象相同，则会覆盖原有同名属性。
        1. 在redux中reducer函数贵姓必须是一个纯函数，reducer的state对象不能直接修改，可以通过扩展运算符的形式返回一个新对象
    2. 如果参数是一个数组，则可以为
        1. 复制数组
        2. 合并数组

## 数据类型之对象
### 创建一个对象的方式
1. 工厂模式：

```javascript
function cratePerson (name,age) {
  var person = new Object
  person.name = name
  person.age = age
  person.sayHello = function () {
    return 'Hello, my name is' + this.name
  }

  return person
}

var john =  cratePerson('john', 30)
```

2. 构造函数模式：

```javascript
function Person(name, age) {  
  this.name = name;  
  this.age = age;  

  this.sayHello = function() {  
    return "Hello, my name is " + this.name;  
  };  
}  

var john = new Person(John,20)
```

3. 原型模式

```javascript
function Person() {}
Person.prototype.name = 'default name'
Person.prototype.age = 0
Person.prototype.sayHello = function () {
  
}

var jhon = new Person()
jhon.name = 'jhon'

```

4. 构造函数模式 + 原型模式

```javascript
function Person(name, age) {
  this.name = name
  this.age = age
}
Person.prototype.sayHello = function () {
   return "Hello, my name is " + this.name;  
}

```

5. 动态原型模式

```javascript
function Person (name,age) {
  this.name = name
  this.age = age
  if (typeof this,sayHello !== 'function') {
    Person.prototype.sayHello = function () {
      return "Hello, my name is " + this.name;  
    }
  }
}
```

6. 寄生构造模式

```javascript
function Person(name, age) {  
  var o = new Object();  
  o.name = name;  
  o.age = age;  
  o.sayHello = function() {  
    return "Hello, my name is " + this.name;  
  };  
  return o;  
}  

var john = Person("John", 30);  
console.log(john.sayHello()); // 输出 "Hello, my name is John"

```

