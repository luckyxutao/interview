
### React.lazy
1. worker到lazy虚拟dom,创建fiber节点并mountLazyComponent
2. 执行`动态导入方法`得到thenable(Promise)
    2.1 throw将thenable对象传到父组件(Suspense)
    2.2 将workInProgress退回到父组件(Suspense)
    2.3 成功后将结果挂载到Lazy虚拟DOM的result
3. Suspense拦截到异常，监听then对象
    3.1 then后从root节点重新渲染

### 核心步骤
1. mountLazyComponent(虚拟DOM)
2. 执行import()方法得到thenable，监听then回调，成功后将结果挂到fiber节点
3. 如果当前是pendeing状态，throw将thenable传给Suspense
4. Suspense监听promise对象的then,从根节点重新渲染

### React.Lazy函数
创建Lazy类型虚拟DOM元素
* $$typeof: Symbol(react.lazy)
* _ctor函数，执行会返回promise
    ```js
    _ctor =()=>import('.xxx.js')
    ```
* status(pending,resolved,reject)
* _result，thenable或组件(异步加载的组件)

### Suspense组件
* 监听子节点lazy，绑定监听事件(then,retry)
* retry后，会从根节点开始重新渲染


### Webpack处理
* webpack编译ast后将import()依赖提取出来，import()替换成webpack_require.e('chunkId')
* 划分成单独的chunk,生成asserts时使用chunk模块
* 生成资源文件