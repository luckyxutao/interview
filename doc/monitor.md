### 项目
* 依赖
    * user-agent
    * html-webpack-plugin
    * webpack/webpack-cli
* webpack-dev-server
* webpack.config.js
```js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry : './src/index.js',
    context: process.cwd(),
    mode:'development',
    devServer:{
        contentBase : path.resolve(__dirname,'dist')
    },
    output:{
        path : path.resolve(__dirname,'dist');
        filename: 'bundle.js'
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./src/index.html',
            inject:'head'
        })
    ]
}

```

### monitor
* monitor.js

```javascript
function injectJsError(){

}
```