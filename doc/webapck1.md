### 核心概念
* entry
* output
* module
* chunk
* loader
* plugin

### 作用
* 代码转换
* 代码优化
    * css/js压缩
    * 按需加载
* 代码分割
* 自动刷新
* 代码较验
### 自动刷新
所有产出的文件都会写到内存而不是写到硬盘上
* webpack-dev-server(WDS)
    * contentBase 产出文件的根目录
    * --open 自动打开浏览器
    * port
    * host
* 热加载
### 指纹
* 类型
    * hash
    每次编译有一个文件修改hash会变，所有产出的资源hash都一样
    * chunkhash
    依赖本chunk修改情况，chunk所依赖的任一模拟变了，chunkhash就会变，可在MiniCssExtractPlugin配置
    * contenthash
    大->小
    hash变了->chunkhash变了->contenthash没变
* 占位符
    * ext
    * name
    * path相对路径
    * folder
    * contenthash
    * hash
### entry
```javascript
module.exports = {
    // entry : './src/index.js', //单入口
    //多入口
    entry : {
        index : './src/indexa.js',
        login : './src/login.js
    },
    output:{
        path : '绝对路径',
        //单入口情况下默认为main,main.xxxx.js
        //多入口 index.xxx.js, login.xxx.index.js
        filename:'[name].[hash:8].js'
    }
}
```
### Loader(以css为例)
单一职责，把不同类型文件都转为`JS`,如:CSS、ES6/7，JSX等
从右往左，前一个结果传给第二个loader
* cssloader
    * 处理导入的资源import、url图片路径
* styleloader
    * 行内样式
* usage
```javascript
    modules:{
        rules : [{
            test : /\.css$/,
            //从右向左处理css文件
            use : ['style-loader','css-loader]
        }]
    }
```
### plugin
* HtmlWebpackPlugin
    * 产出html文件，把打包资源插入模板中
    ```javascript
    plugins : [
        new HtmlWebpackPlugin({
            template:'./src/index.htmlk',
            filename : 'index.html',//产出后文件名
            hash:true,
            //多入口情况。默认会将多个chunk插入html
            //多入口，指定入口
            chunks:['login','index'],
            chunkSortMode : 'nanual'
        })
    ]
    ```
### 引用图片
* file-loader
将图片\字体等资源，拷贝到output目录，返回文件路径
* url-loader
当图片小于limit的时候会把图片BASE64编码，大于limit参数的时候还是使用file-loader 进行拷贝
* image-webpack-loader
压缩图片
```javascript
{
    test:/\.(jpg|png)$/,
    use : ['file-loader']'
}
```
* url-loader

### 分离css(extract)
* mini-css-extract-plugin
```javascript
rules:[{
    test:/\.css$/,
    use:[MiniCssExtractPlugin.loader,'css-loader']
}]
plugins:[new MiniCssExtractPlugin({
    filename:'[name].css',
    //main.css
    // chunkFilename:'[id].css' //异步加载时用?
})]
```
### 压缩js和css
develpoment忽略，prod才会走optimization
* uglifyjs(old)
* terser-webpack-plugin支持es6
* optimize-css
```javascript
optimization:{
    minimizer:[ //优化插件
        new TerserWebpackPlugin({
            parallel:true, //多进程
            cache:true , //缓存
        })，
        new OptimizeCssAssetsWebpackPlugin({
            assetNameRegExp:/\.css$/,
            cssProcessor:require('cssnano)
        })
    ]
}
```
### less和sass
purgecss-webpack-plugin去掉重复css
```javascript
modules:{
    rules :[{
        test : /\.scss$/,
        use : [MiniCssExtractPlugin.loader,'css-loader','sass-loader']
    }]
}
```
### 处理css3属性前缀
.browserlist文件指定兼容的版本
postcss.config.js
postcss作用
    * 把css解析成AST
    * 调用插件处理AST并生成新代码
```
npm i postcss-loader autoprefixer -D
//postcss.config.js
module.exports = {
    plugins:[require('autoprefix)]
}
```
### es6/7/8
通过@babel/runtime来避免重复引入辅助代码
.babelrc(JSON格式)
* loose
    * false 是通过Object.defineProperty定义属性的
    * true 类属性赋值
```javascript
{
    test : /\.js$/,
    use : {
        loader : 'babel-loader',
        options:{
            "presets":['@babel/preset-env','@babel/preset-react'],
            "plugins":[
                ['@babel/plugin-proposal-decorators',{legacy:true}],
                ['@babel/plugin-roposal-class-properties',{loose:true}],
                [
                    '@babel/plugin-transform-runtime',{
                        corejs:false,
                        helpers:true,
                        'regenerator':true,
                        'useESModules:true
                    }
                ]
            ]
        }
    }
}
```
* 编译
    @bable/core
    @babel/loader
    @babel/preset
    @babel/preset-react
* 插件
    1. plugin-proposal-decorators
    2. plugin-roposal-class-properties

### @babel runtime
* babel 在每个文件都插入了辅助代码，体积过大
* babel 对一些公共方法使用 非常 小的辅助方法，_extend
* 默认情况会加到每个文件，通过@babel/rutime作为一个独立模块，避免重复引入
```
npm i -D @babel/plugin-transform-runtime
npm i -D @babel/runtime 
```