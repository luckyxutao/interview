### eslint
* 继承esling-config-airbnb

```
npm i eslint eslint-loader babel-eslint -D
```
* 配置eslintrc.js
```javascript
//webpack.config.js
{
    test : /\.js$/,
    loader:'eslint-loader',
    include: path.join(__dirname,'src'),
    enforce:'pre',//强制提前执行
    exclude:/node_moules/
}

///eslintrc.js
module.exports = {
    parser:'babel-eslint',
    extends:'airbnb',
    root:true, //根配置
    parserOptions:{
        sourceType:'module',
        ecmaVersion:'es2015'
    },
    env:{
        browser:true,
        node:true //require process
    },
    rules:{
        "ident":['error',4]
    }
}
```
### iconfont
```javascript
{
    test:/\.(ttf|svg|woff)$/,
    use:{
        loader:'url-loader'
    }
}
```
```css
@font-face({
    src : url('./fonts/ha.otf) format('truetype'),
    font-family:'habass
})
```

### 调试打包后的代码
css/js都可以
source-map工作原理(面试题)
* cheap-source-map
    不包含列的信息
    不是真正的源码
* cheap-module-source-map
    是真正源码
    不包含列的信息
* sourcemap效果最好，最慢
    * 报错定位最精确
        定位到行，列
    * 生成js.map文件
    * source.js.map
* eval包裹执行，性能最好，
    * why eval?
    Perfect SourceMaps are slow

//# sourceURL=webpack://''
* 
```
source-map

```