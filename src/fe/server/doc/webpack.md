### webpack默认配置是在哪处理的，loader有什么默认配置么？
在WebpackOptionDefaulter的process中处理的，默认支持了javascript、json等
### webpack中有一个resolver的概念，用于解析模块文件的真实绝对路径，那么loader和普通模块的resolver使用的是同一个么？
* resolve是用来解析普通模块的转为绝对路径
可配置alias、extensions(扩展名)、mainFields(查找package.json里入口字段,默认是main)、modules(查找目录)
* resolveLoader只用于解析loader路径
modules、extensions及modules，意义和resolve的相同

### 那么inline loader和normal config loader执行的先后顺序是什么？
在webpack.config中通过enforce字段控制，执行顺序= Post + inline + normal(auto) + post

### 如何写一个异步loader，webpack又是如何实现loader的异步化的？
* 异步loader
  1. callback = this.async()
  2. 异步处理结束后调用callback
* 原理
  1. 通过async函数设置loader-runner函数全局变量为异步模式，并返回一个callback
  2. 异步处理完后，callback再将全局变量改为同步模式，并继续调用iterateNormalLoaders，执行下一个loader
### loaderContext对象结构
![](https://s1.ax1x.com/2020/06/01/t8V1aQ.png)
### loader function中的this.data是如何实现的？
1. data是放在当前的loader对象上，loaders都是挂载在loaderContext对象上的， loader函数执行的作用域是loaderContext
2. loaderContext.loaders[loaderContext.loaderIndex].data;


### loader作用是什么 ？
loader的作用是在模块编译前，将模块转换成webpack可识别的内容，在 webpack4 之前，loader 函数的输入输出都必须为字符串，但在 webpack4 之后，loader 也同时支持 抽象语法树（AST） 的传递，以此来减少代码的重复解析。
