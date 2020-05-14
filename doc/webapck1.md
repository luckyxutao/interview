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

```javascript
{
    test:/\.(jpg|png)$/,
    use : ['file-loader']
}
```
* url-loader

### 分离css(extract)
* mini-css-extract-plugin
```javascript
new MiniCssExtractPlugin({
    filename:'[name].css',
    //main.css
    chunkFilename:'[id].css' //异步加载时用
})
```