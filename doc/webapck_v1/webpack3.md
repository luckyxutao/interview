### 优化
* 自动注入_变量
expose-loader向全局对象暴露变量
ProvidePlugin，自动注入局部变量
### 减小尺寸
* externals
    1. 把库通过cdn外部引入
    2. webpack.config.js配置externals
```javascript
externals:{
    'jQuery':'jQuery'
}
```
* html-webpack-externals-plugin
只是不需要手动往html引了
```javascript
new HtmlWebpackExternalsPlugin({
    external:[{
        module:'jquery',//模块名
        entry : 'https://xxxxx.jquery.js',
        global:'jQuery'
    }]
})
```
### watch
```
{
    watch : true,
    watchOptions:{
        ignored: /node_modules/,
        aggre
    }
}
```
### copy-plugin
资源文件拷贝
### 本地proxy
* 本地调试跨域外部接口
```
proxy:{
    '/api': {
        target : "http://localhost:3000",
        pathRewrite:{
            "^/api": ""
        }
    }
}
```
### wepback-dev-middleware
* 启动编译 compiler.run
* 响应客户端对打包后文件的请求

#### 优化
加快速度
* resolve
```javascript
module:{
    noParse:/jquery|lodash/
}
//自定义loader，和resolve配置项基本相同
resolveLoader:{

},
resolve:{
    //查找文件规划
    extensions:['.js','.jsx','.json','.css']，
    alias : {
        'bootstrap' :  path.join(__dirname,'node_modules/bootstrap/dist/css/bootstrap.css')
    },
    //1.添加额外查找目录，2 限定目录，加快速度
    modules:["node_modules"],
    //找package.json里的入口
    mainFields:['style','main','module'],
    //默认会找模块下index.js文件
    mainFiles:['index']
}
// noParser:/jquery|lodash/
```
### DefinePlugin
* 
注入全局变量

### 环境区分
webpack-merge
试试
log打印
```
webpack --env=development
webpack --env=production
```
### ignore-plugin
```javascript
new webpack.IgnorePlugin(/^.\/locate//,/^moment/')
```
### 多入口
通过编写程序控制注册多个htmlwebpackPlugin
```
const entries = glob.sync('./src/entries/*.js);
entries.forEach(entryFile=>{

})
entries
    index.js
    login.js
    register.js

pages
    index.html
    login.html
    register.html
```
### 打包日志优化
* friendly-errors-webpack-plugin

### 插件耗时分析


###