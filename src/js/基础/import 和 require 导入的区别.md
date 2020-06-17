### import和require导入区别
require只是初次加载时把值挂载到module.exports对象上，之后会从`缓存`读取

### require加载性能问题
模块是动态加载的，每次require都会获取最新的导出结果，可以将require写到条件中

### exports和module.exports区别


### commonjs require工作原理

* require
    1. 读文件
    2. 函数包装
    3. 执行函数，把结果挂到module.exports
    4. return module.exports
```js
module.exports.a = 1;
exports.a = 1;
this.a = a;

module.exports = 'hello';
exports.a = 1;
```