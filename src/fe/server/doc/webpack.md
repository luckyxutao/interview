## LOADER
### loader作用是什么 ？
webpack自身只支持js和json这两种格式的文件，对于其他文件需要通过loader将其转换为或者amd/es_modules/commonJS规范的文件后，webpack才能解析到。

### webpack编译流程中loader是如何以及在何时发挥作用的？
编译模块前会将`源文件`先由loader处理后转换成webpack能识别的内容(`javascript`)
webpack能处理js里的模块依赖， amd、es_modules和commonjs等，却识别不了箭头函数等(需要babel-loader)转换
* url-loader
```js
"export default __webpack_public_path__ + "9e20846d3838a9c29429de1a2f2175fc.png";"
```
* babel-loader
```js
"// import './index.scss';
import Responsive from './scripts/utils/responsive';

var abb = function abb() {
  console.log('aaaa');
};
console.log(abb, Responsive);"
```

### 常见loader
eslint-loader/file-loader/url-loader/style-loader/babel-loader/css-loader/scss-loader等

### webpack默认配置是在哪处理的，loader有什么默认配置么？
在WebpackOptionDefaulter的process中处理的，默认支持了javascript、json等

### webpack中有一个resolver的概念，用于解析模块文件的真实绝对路径，那么loader和普通模块的resolver使用的是同一个么？
* resolve是用来解析普通模块的转为绝对路径
可配置alias、extensions(扩展名)、mainFields(查找package.json里入口字段,默认是main)、modules(查找目录)
* resolveLoader只用于解析loader路径
modules、extensions及modules，意义和resolve的相同

### 那么inline loader和normal config loader执行的先后顺序是什么？
在webpack.config中通过enforce字段控制，执行顺序= Post + inline + normal(Auto) + Pre

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

### 如果你写过loader，那么可能在loader function中用到了this，这里的this究竟是什么，是webpack实例么？
this是指loaderContext对象，不是wepback的实例

### 如果在某个pitch中返回值，具体会发生什么？
会把当前pitch的结果传给前一个loader(左)的normal来处理， remainingRequest包括source文件都会被忽略

### 配置中的module.rules在webpack中是如何生效与实现的？
* RuleSet 类主要作用于过滤加载 module 时符合匹配条件规则的 loader
* RuleSet 在内部会有一个默认的 module.defaultRules 配置，默认支持json、js等

### loader为什么是自右向左执行的？
loader1.pitch->loader2.pitch->loader3.pitch->
源码->loader3.noraml->loader2.normal->loader1.normal


