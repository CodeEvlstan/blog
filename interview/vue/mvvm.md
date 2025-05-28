### MVC和MVVM的定义
#### **mvc** (model view Model) 
**1. ​MVC的三层结构**
- Model（模型）​​：管理数据逻辑（如数据库操作、网络请求）；
- View（视图）​​：负责UI展示（如HTML页面）；
- Controller（控制器）​​：协调Model与View，处理用户输入并更新数据。
典型场景：传统Web应用中，用户点击按钮触发Controller调用Model更新数据，再手动操作DOM更新View
#### **mvvm** (model view viewModel)
**​1. MVVM的三层结构**
- Model​：功能与MVC相同；
- View​：通过数据绑定自动同步ViewModel状态；
- ​ViewModel​：核心桥梁，将Model数据转换为View可用的形式，并通过双向绑定实现自动更新。
- Vue实现：Vue实例作为ViewModel，通过data属性管理状态，v-model等指令实现数据与DOM的双向绑定


