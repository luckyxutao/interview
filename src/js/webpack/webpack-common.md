### webpack与grunt、gulp的不同？
支持多种模块标准，如 AMD 规范 、Commonjs 规范、 ES6 模块规范 等等，支持代码分割方案，处理各种类型的资源，除了能处理 JavaScript 文件，还能处理样式、模板、甚至图片。
rollup或gulp再适合框架和类库产品开发

### 如何加快构建速度
* 通过externals配置来提取常用库
* 利用DllPlugin和DllReferencePlugin预编译资源模块 
* HappyPack它把任务分解给多个子进程去并发的执行，子进程处理完后再把结果发送给主进程。
* 缩小范围
    * module.rules
        * exclude、include
    * resolve.modules
        默认是当前目录下的node_modules，而依赖库却在项目根目录下的node_modules
    * resolve.mainFields
    * resolve.extension
        extensions默认是[js,json]

### webpack打包流程
* 解析合并参数
    * 从命令行读取参数及配置文件合并到webpack默认的配置文件
    * WebpackOptionDefaulter并优化
* compiler.run开始编译
* 找到入口(singleEntryPlugin)
* 编译（compilation）
    * 从入口编译，将所有模块及依赖都放到的modules:[NormalModule]
        * NormalModule主要有name（划分chunk依据）和_source
    * NormalModule编译
        * resolve&resolveLoader
            * 找到模块绝对路径
            * 找到loader的绝对路径，过滤及调整loaders的顺序
        * 源文件 = 读取源文件 -> run-loaders，目标是js,webpack可识别
        * 转AST、处理require和import
        * 生成新code

* seal生成chunk（compilation）
    * 根据modules和name划分chunk
* 生成assets
    * 根据chunks和template生成资源
    * files['main.js'], assets:{'main.js':source}

* emit(compiler)
    * 根据compilation.assets来往磁盘写文件, outputPath
* done

### 代码分离
* 多入口
* 动态导入(dynamic imports)
* splitChunks，公共的依赖模块提取到单独chunks
* 预取/预加载模块(prefetch/preload module)
这会生成<link rel="prefetch" href="login-modal-chunk.js">并追加到页面头部，指示着浏览器在闲置时间预取 login-modal-chunk.js 文件。
    ```js
    import(/* webpackPrefetch: true */ 'LoginModal');
    ```

### 使用import时，webpack对node_modules里的依赖会做什么?
* 找node_modules下对应目录，找到package.json里的main字段（可配置），可以找到入口，通常是index.js

### 热更新步骤
* 引用HotModuleReplacementPlugin插件
* webpack.config.js中devServer中hot为true
* 模块代码
    ```js
    function render(){
        let title = require('./title').default;
        root.innerHTML= title;
    }
    render();
    if(module.hot){
        //如果title变化 了，会重新调回调函数
        module.hot.accept(['./title'],render)
    }
    ```

### 有哪些常见的Plugin？你用过哪些Plugin？
基于事件流框架 Tapable，插件可以扩展 Webpack 的功能，在 Webpack 运行的生命周期中会广播出许多事件，Plugin 可以监听这些事件，在合适的时机通过 Webpack 提供的 API 改变输出结果。
* 工程化
    * definePlugin
    * clean-webpack-plugin
    * webpack-bundle-analyzer
    * html-webpack-plugin
    * speed-measure-webpack-plugin
* css
    * mini-css-extract-plugin
    * optimize-css-assets-webpack-plugin
    * postcss-loader
        * autoprefixer
    * PurgeCSS
* js
    * terser-webpack-plugin(webpack默认)