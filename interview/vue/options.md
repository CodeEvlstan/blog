<Badge type="warning">内容编写中</Badge>


## data为什么是一个函数而不是一个对象
SPA页面中，全局使用一个Vue实例，由于javascript中使用对象会将这些data上的数据会指向同一个Vue实例，当不同的组件存在相同字段的data值时，会造成变量污染。因此使用一个函数返回对象的形式，可以使得每一个组件中拥有独立的data作用域。使得组件间互不干扰。

## computed/watch/methods三者的区别
### computed和watch的区别
1. computed
    1. 它支持缓存，只有依赖的数据发生了变化，才会重新计算
    2. 不支持异步，当Computed中有异步操作时，无法监听数据的变化
    3. computed的值默认走缓存，计算属性是基于它们的响应式依赖（自身data与父组件传递的props）进行属性计算的
    4. 如果一个属性是通过其他属性计算而来，这个属性依赖于其他的属性，一般情况下会使用computed
    5. 非默认的情况下，computed的属性值是一个函数，默认使用get方法的返回值，当数据发生改变的情况下，会调用set方法
2. watch
    1. 它不支持数据缓存，数据发生变化时，他就会触发相应的操作
    2. 支持异步监听
    3. 监听的函数接收两个参数（newValue,oldValue）
    4. 监听数据必须是data中的声明或者父组件传递过来的props中的数据，当数据变化时会触发其他操作。函数有两个参数
        1. immediate:组件加载立即触发回调函数
        2. deep: 深度监听，发现数据内部变化是，在负载类型中使用

### computed和methods的区别
1. 相同点：可以将同一个函数定义为一个method或者一个计算属性。对于最终的结果，两种方式时相同的
2. 不同点：
    1. computed：计算属性时基于他们的依赖进行缓存的，只有在它的相关依赖发生改变时，才会重新请求值
    2. method： 调用就会执行该函数

## v-model
v-model的本质并不是一个完全的双向数据绑定，更像是一个语法糖，用来实现数据绑定和更新的链接

### v-model定义在表单元素上
动态绑定了input的value指向message变量，并且在触发input事件的时候，动态把message设置为目标值

```html
<input v-model='message' />
<!-- 等价于 -->
<input v-bind:value='message' v-on:input='message = $event.target.value'
  
```

### v-model定义在组件上
本质是通过 v-model 实现了 通过绑定属性value 和监听数据props的方式像父组件传递方法



## keep-alive
keep-alive的主要用于保存一些组件的状态，防止多次渲染。既可以理解为是实现特定需求场景下使用的组件，也可以理解为是性能优化方案的一部分。如果需要保持状态，可以使用 <keep-alive/ > 组件进行包裹

### KeepAlive组件接收三个参数
1. include: 字符串或者正则表达式，只有名称匹配的组件会被匹配
2. exclude： 字符串或者正则表达式，任何名称匹配的组件都不会被缓存
3. max: 数字， 表示最多可以缓存多少个组件实例

### keep-alive 执行的流程
1. 判断组件name, 不在include或者exclude中存在，直接返回vnode, 说明该组件不被缓存
2. 获取组件实例key，如果有获取实例的key，则执行后续规则，否则重新生成
3. 如果组件存在于缓存对象中，则直接从缓存对象中获取组件实例给vnode, 不存在则将当前组件添加到缓存对象中。 当最大缓存数量达到时，由于缓存对象是一个队列结构，则先添加进去的缓存组件会被释放，并将最新的组件缓存近缓存对象中

```vue
const patternTypes: Arrat<Function> = [Stinrg, RegExp, Array]

  export default {
    name: 'keep-alive',
    abstract: true,
    props:{
      include: patternTypes,
      exclude: patternTypes,
      max: [String, Number]
    }
      created () {
    this.cache = Object.create(null)
    this.keys = []
  }
   destroyed () {
     for (const key in this.cache) {
       peuneCacheEntry(this.cache, key, this,keys)
     }
   }

  }
```

## v-for 与 v-if 的优先级
1. 在vue2中，v-for的优先级要高于v-if，也就是说，如果我们需要在v-for循环中同时使用v-if，那么每一个循环的内容都会去判断一次是否需要加载到DOM结构中，在v-for数量较多的时候，性能较好是很大的，会极大的影响项目质量。
2. 如果是v-if 和每一个循环体没有强相关，则可以在外层包裹一层 v-if 的情况下内含循环体。
3. 如果是v-if 和每一个循环体都相关，则可以通过计算属性过滤掉不需要显示的数据，从而减少v-if过多造成的性能问题。
4. vue3 已经将 v-if 的性能提高到了 v-forz之前，因此不再需要考虑优先级问题。
5. 官方始终不推荐v-if 和 v-for 共同使用。

