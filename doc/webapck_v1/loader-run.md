### loaderContext
![](https://s1.ax1x.com/2020/05/18/YW2XlQ.png)

### css-loader
* 作用
    1. @import和url地址
* postcss

```javascript
const postcss = require('postcss');
const Tokenzer = require('css-selector-tokenizer);
let pipeline = postcss([])
pipeline.process('border:solid 1px red;').then(result>{
    console.log(result)
})
```

### 相关问题
* [https://juejin.im/post/5bc1a73df265da0a8d36b74f](https://juejin.im/post/5bc1a73df265da0a8d36b74f)
* [https://juejin.im/post/5d2d336951882543b7223307](https://juejin.im/post/5d2d336951882543b7223307)
### loader顺序
* post(后置)+inline(内联)+normal(正常)+pre(前置)
* 从右往左执行
### loader类型
* auto(normal)、pre、 post
* 以上3种之外是inline
### 标识符
```javascript
require('{标识符}inline1!inline2!./hello.js')
```
符号 | 变量  | 含义 |  source
---- | ---  |  --- | ---
-! | noPreAutoLoaders  |  不要前置和普通loader | Prefixing with -! will disable all configured preLoaders and loaders but not postLoaders
! |  noAutoLoaders | 不要普通loader | Prefixing with ! will disable all configured normal loaders
!! | noPrePostAutoLoaders | 不要前后置和普通loader,只要内联loader | Prefixing with !! will disable all configured loaders (preLoaders, loaders, postLoaders)
```javascript
    module: {
        rules: [{
            test: /hello\.js$/,
            loader: 'preloader',
            enforce : 'pre'
        },{
            test: /hello\.js$/,
            loader: 'postloader',
            enforce : 'post'
        },{
            test: /hello\.js$/,
            loader: 'normalloader'
        }]
    },
```