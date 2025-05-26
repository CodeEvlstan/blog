## 声明数组的方式
### 数组字面量
使用 “ [] ”来声明一个数组，可以在双括号中添加元素，用逗号分隔

```javascript
let arr1 = []; // 空数组
let arr2 = [1, 2, 3]; // 包含三个元素的数组
let arr3 = ['apple', 'banana', 'orange']; // 包含字符串元素的数组

```

### 通过Array构造函数
使用Array构造函数来创建数组，可以通过传递元素作为参数

```javascript
let arr4 = new Array(); // 创建一个空数组
let arr5 = new Array(1, 2, 3); // 创建一个包含三个元素的数组
```

需要注意的是，如果像Array构造函数传递单个整数参数时，他会被视为数组的长度，而不是元素值

```javascript
let arr6 = new Array(5); // 创建一个长度为5的空数组
```

### 通过Array.from
使用 Array.from 方法可以将类数组对象或可迭代对象转换为数组

```javascript
let str = 'hello';
let arr7 = Array.from(str); // 将字符串转换为字符数组 ['h', 'e', 'l', 'l', 'o']
```

### 使用扩展运算符
使用扩展运算符可以将一个数组中的元素展开到另一个数组中

```javascript
let arr8 = [1, 2, 3];
let arr9 = [...arr8, 4, 5]; // 创建一个新数组，包含arr8的元素和额外的元素 [1, 2, 3, 4, 5]
```

## 什么是类数组和真实数组
