1. 开启严格模式的情况下，独立函数调用的this不会指向全局，而是会指向undefined
2. 开启严格模式，通过Object.defineProperty()修改对象的writable为false,在对这个对象进行值得修改时，会抛出错误。