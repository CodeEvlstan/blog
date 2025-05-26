## 属性设置和屏蔽
如果一个对象的 [prototype] 上的属性没有被设置成只读，或者拥有同名的setter,则通过  [put], 可以修改这个属性的值。 如果希设置只读和setter也不行，则可以通过Object.defineProperty()来向这个对象添加这个值。



