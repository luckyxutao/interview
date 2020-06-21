### 数据劫持
* 对象劫持
    * 都使用Object.defineProperty包装
    * 递归解析对象中的属性，依赖增加get/set逻辑
        vue3使用proxy
* 数组劫持
    * 劫持array的pushshift等方法

### 编译模板(render->template-el)
* 编译模板
    * 模板转虚拟dom（用对象来描述DOM节点），AST

* generate
将ast拼接成字符串

### 运行模板，生成代码
* new Function()
* with

### 挂载组件
* 渲染watcher,每个组件都有一个watcher
* vm._render 渲染出虚拟dom
* vm._update 通过虚拟dom创建真实dom
```js
let updateComponent = ()=>{
    vm._update(vm._render());
}
new Watcher(vm,updateComponent,()=>{},true);
```
### 虚拟dom上影射着真实dom


## 依赖收集
* 每个data属性都有自己的watcher, name:watcher, age:watcher

### 批量更新
updateQueue
