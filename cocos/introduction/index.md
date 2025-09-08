# cocos
COCOS拥有 **高性能、低功耗、流式加载、跨平台** 等诸多优点，您可以用它来创作 **游戏、车机、XR、元宇宙** 等领域的项目。

初始化项目结构后
- `assets`：资源目录
    `assets` 用来放置游戏中所有的本地资源、脚本和第三方库文件。只有在 `assets` 目录下的内容才能显示在 资源管理器 中。`assets `中的每个文件在导入项目后都会生成一个相同名字的 `.meta`文件，用于存储对应的资源配置和索引信息。`.meta`文件需要一并提交到版本控制系统，详见 资源管理注意事项 --- `meta` 文件。
    一些第三方工具生成的工程或设计源文件，如 TexturePacker 的 .tps 文件，或 Photoshop 的 .psd 文件，可以选择放在 assets 外面管理。
    - Scripts/: 存放所有游戏脚本（.ts或.js文件）。
    - Textures/: 存放所有图片资源（如PNG、JPG文件）。
    - Sounds/: 存放音频资源（如MP3、WAV文件）。
    - Scenes/: 存放场景文件（.scene文件）。
    - Prefabs/: 存放预制件文件（.prefab文件）。
    - Animations/: 存放动画剪辑文件 。
    - Materials/: 存放材质文件（在3D游戏中常用）。
    - Fonts/: 存放字体文件 。
    - Models/: 存放3D模型文件 。
- `build`：构建目录（在构建某平台后会生成该目录）
    在使用编辑器主菜单中的 项目 -> 构建发布 使用默认发布路径发布项目后，编辑器会在项目路径下创建 `build` 目录，并存放所有目标平台的构建工程。
- `library`：导入的资源目录
    `library` 是将 `assets` 中的资源导入后生成的，在这里文件的结构和资源的格式将被处理成最终游戏发布时需要的形式。
    当 `library` 丢失或损坏的时候，只要删除整个 `library` 文件夹再打开项目，就会重新生成资源库。
- `local`：日志文件目录
    `local` 文件夹中包含该项目的本机上的配置信息，包括编辑器面板布局、窗口大小、位置等信息。开发者不需要关心这里的内容。
- `profiles`：编辑器配置
    `profiles` 文件夹中包含编辑器的配置信息，包括各目标平台的构建配置信息、场景配置信息等。
- `extensions`: 扩展插件文件夹
    `extensions` 文件夹用于放置此项目的自定义扩展插件。如果需要手动安装扩展插件，可以手动创建该文件夹。如需卸载扩展插件，在 `extensions` 中删除对应的文件夹即可。
- `settings`：项目设置
    `settings` 里保存特定项目相关的设置，如 项目设置 面板中相关的配置信息等。如果需要在不同开发者之间同步项目设置，请将 `settings` 目录加入到版本控制。
- `temp`：临时文件目录
    `temp` 是临时文件夹，用于缓存一些 Cocos Creator 在本地的临时文件。这个文件夹可以在关闭 Cocos Creator 后手动删除，开发者不需要关心这里面的内容。
- `package.json`：项目配置
    `package.json` 文件和 assets 文件夹一起，作为验证 Cocos Creator 项目合法性的标志，只有包括了这两个内容的文件夹才能作为 Cocos Creator 项目打开。开发者不需要关心里面的内容。

由于我们目前只进行COCOS-2D游戏的开发，因此在记录和介绍时，都只针对2D开发模式
1. **场景编辑器**
 - 鼠标中键：平移视图。
 - 鼠标滚轮：以当前鼠标悬停位置为中心缩放视图。
 - 鼠标右键：平移视图。
 - F 快捷键：摄像机聚焦到当前选中节点。
 - 其他快捷键
    | 选项 | 说明 | 默认快捷键 |
    | :--- | :--- | :--- |
    | 撤销 | 撤销上一次对场景的修改 | Ctrl/Cmd + Z |
    | 重做 | 恢复上一步骤的撤销动作 | Ctrl/Cmd + Shift + Z |
    | 剪切 | 剪切当前选中的节点或字符到剪贴板 | Ctrl/Cmd + X |
    | 复制 | 复制当前选中的节点或字符到剪贴板 | Ctrl/Cmd + C |
    | 粘贴 | 将剪贴板中的内容粘贴到相应的位置 | Ctrl/Cmd + V |
    | 全选 | 焦点在层级管理器内为选中同一层级中的所有节点，焦点在资源管理器则选中同一层级中的所有资源 | Ctrl/Cmd + A |

2. **资源管理器**
**资源管理器** 面板主要可以分为 **工具栏** 和 **资源列表** 两部分内容：

工具栏 中的功能包括 新建资源、排序方式、搜索过滤、搜索框、全部折叠/展开 和 刷新列表。详情可参考下文介绍。

资源列表 将项目资源文件夹中的内容以树状结构展示出来，默认包括 assets 和 internal 两个基本资源库（简称 DB）：
 - assets 类似操作系统中的文件管理器，只有放在项目文件夹的 assets 目录下的资源才会显示在这里。关于项目文件夹结构说明请参考 项目结构。
 - internal 中的是默认的内置资源（只读），内置资源可以复制，但不能进行增删改操作。可以作为资源模板拖拽到 assets 中，即新建了一个项目资源。 

3. **术语**

4. **如何制作预制体**
5. **输入事件系统**
    | 事件类型 | type | 说明 |
    | :--- | :--- | :--- |
    | **鼠标事件** | Input.EventType.MOUSE_DOWN | 当鼠标按键被按下时触发 |
    |  | Input.EventType.MOUSE_MOVE | 当鼠标指针移动时触发 |
    |  | Input.EventType.MOUSE_UP | 当鼠标按键被释放时触发 |
    |  | Input.EventType.MOUSE_WHEEL | 当鼠标滚轮滚动时触发 |
    | **触摸事件** | Input.EventType.TOUCH_START | 当手指开始触摸屏幕时触发 |
    |  | Input.EventType.TOUCH_MOVE | 当手指在屏幕上移动时触发 |
    |  | Input.EventType.TOUCH_END |  当手指离开屏幕时触发（正常结束） |
    |  | Input.EventType.TOUCH_CANCEL | 当触摸被系统事件中断时触发（如来电） |
    | **键盘事件** | Input.EventType.KEY_DOWN | 当键盘按键被按下时触发 |
    |  | Input.Type.KEY_PRESSING | 当键盘按键持续按住时触发 |
    |  | Input.Type.KEY_UP | 当键盘按键被释放时触发 |
    | **设备重力传感事件** | Input.EventType.DEVICEMOTION | 当设备检测到运动时触发（重力感应、加速度计等） |

```javascript
// 注册鼠标按下事件
input.on(Input.EventType.MOUSE_DOWN, (event) => {
    console.log('鼠标按下位置:', event.getLocation());
}, this);

// 注册触摸开始事件
input.on(Input.EventType.TOUCH_START, (event) => {
    console.log('触摸开始:', event.getTouches());
}, this);

// 注册键盘按下事件
input.on(Input.EventType.KEY_DOWN, (event) => {
    console.log('按键按下:', event.keyCode);
}, this);

// 注册设备运动事件
input.on(Input.EventType.DEVICEMOTION, (event) => {
    console.log('设备加速度:', event.acceleration);
}, this);
```

## 核心术语
1. **节点（Node）**：节点是 Cocos Creator 中最基本的单位，类似于 HTML DOM 元素。每个节点可以是一个图片、精灵（Sprite）、按钮（Button）或自定义的对象。**Node** 节点是一个组件必须存在的，它由一个一个组件组成。
2. **组件（Component）**：组件是功能的载体。就像前端框架中的组件一样，Cocos Creator 中的每个节点都可以添加不同的组件来赋予功能，比如添加物理属性、动画效果等。
 - Node
 - UITransform
    1， Anchor Point：锚点位置， 根据ContentSize进行确认, 如何调整锚点和中心点
 - Sprite 负责渲染2D图像或图集
3. **场景（Scene）**：场景相当于一个游戏的页面，是节点和组件的容器。可以通过加载不同场景来切换游戏中的关卡或状态。
 - 在首选项中设置默认编辑场景
4. **资源管理**：类似于前端中的 src 目录，Cocos Creator 提供了资源管理器用于管理游戏中的所有资源，如图片、音效、脚本等。

## 核心技术
1. **预制体制作**： 将层级管理器中的节点拖入资源管理器中对应的预制体文件夹集合即可

## 核心API
### 场景相关

### 资源文件相关
1. 资源文件的UUID是唯一的，用于管理游戏资源，如果出现相同的UUID，则会出现资源管理方面的报错 （The id already added）, 通常是操作资源管理器时将meta文件一同复制了。如果时图集的情况下，一个meta文件会生成多个UUID。
2D游戏： 
### 控制台
1. 会显示开发过程中的警告，错误等
### 层级管理器
1. 先渲染父节点canvas，节点树上的顺序会影响渲染顺序，
2. 在层级管理器中，两个节点重名是没有关系的，但是在代码里通过名字获取，会获取到多个。 
### 场景切换
1. 小游戏做一个加载场景，和一个主场景，然后做预制体的切换
### 左手坐标系
### 矩形变换工具
### 增量吸附工具

## 世界坐标系与本地坐标系
1. 精灵

物理事件

什么是组件  组件属性又是什么

https://blog.csdn.net/qq_51326491/article/details/140782003?ops_request_misc=&request_id=&biz_id=102&utm_term=cocos%20creator&utm_medium=distribute.pc_search_result.none-task-blog-2~all~sobaiduweb~default-8-140782003.142^v102^pc_search_result_base9&spm=1018.2226.3001.4187

学习  Cocos 社区中优秀的作品远


2D游戏： 
1. 精灵

物理事件

什么是组件  组件属性又是什么

https://blog.csdn.net/qq_51326491/article/details/140782003?ops_request_misc=&request_id=&biz_id=102&utm_term=cocos%20creator&utm_medium=distribute.pc_search_result.none-task-blog-2~all~sobaiduweb~default-8-140782003.142^v102^pc_search_result_base9&spm=1018.2226.3001.4187

学习  Cocos 社区中优秀的作品远