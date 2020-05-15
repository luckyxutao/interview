### polyfill
runtime里corejs也包含了polyfill的功能
这些对象还是需要polyfill
* babel-polyfill
    * react官方推荐,缺点体积大
    * 引用方式
        require('babel-polyfill')
        import('babel-polyfill')
* polyfill.io
根据头信息中的useragent实现按需加载

### libraryTarget 和library
* webpack打包js库
* 要实现运算功能 
* 打包成压缩版和非压缩版 
* 支持CJS/ESM方式导入

```javascript

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
module.exports = {
    mode:'none',
    entry:{
        'zhufengmath':'./src/index.js',
        'zhufengmath.min':'./src/index.js'
    },
    optimization:{
        minimize:true,
        minimizer:[
            //可以支持es6,默认的使用TerserPlugin
            new TerserPlugin({
                include:/\.min\.js/
            })
        ]
    },
    output:{
        filename:'[name].js',
        library:'zhufengmath',//配置导出库的名称
        libraryExport:'default',
        libraryTarget:'umd'//配置以何种方式导出库,是字符串的枚举类型
    }
};
```