## 拓展
### Promise
* [Promise.all-1](./src/ts/1.Promise.all.js)
* [Promise.any-1](./src/ts/2.Promise.any.js)
* [Promise.allSettled-1](./src/ts/3.Promise.allSettled.js)
* [deepClone-3](a)

### ES6
* [WeakMap-1](https://juejin.cn/post/6844903646623186958)


### 笔试
* [给 JavaScript 的 String 原生对象添加一个名为 trim 的原型方法](https://lgwebdream.github.io/FE-Interview/program/#%E7%BB%99-javascript-%E7%9A%84-string-%E5%8E%9F%E7%94%9F%E5%AF%B9%E8%B1%A1%E6%B7%BB%E5%8A%A0%E4%B8%80%E4%B8%AA%E5%90%8D%E4%B8%BA-trim-%E7%9A%84%E5%8E%9F%E5%9E%8B%E6%96%B9%E6%B3%95%EF%BC%8C%E7%94%A8%E4%BA%8E%E6%88%AA%E5%8F%96%E5%AD%97%E7%AC%A6%E4%B8%B2%E5%89%8D%E5%90%8E%E7%9A%84%E7%A9%BA%E7%99%BD%E5%AD%97%E7%AC%A6)
```javascript
  String.prototype.myTrim = function(){
    return this.replace(/^\s*|\s*$/g,'')
  }
```
* [给定起止日期，返回中间的所有月份]()
```javascript
const getRangeMonth = (startDateStr = '', endDateStr = '') => {
  const result = [];
  let startDate = convertToDate(startDateStr);
  let endDate = convertToDate(endDateStr);
  startDate.setMonth(startDate.getMonth()+1)
  while(startDate.getTime() < endDate.getTime()){
    let month = startDate.getMonth();
    let year = startDate.getFullYear();
    result.push(`${year}-${(month+'').padStart(2,0)}`);
    startDate.setMonth(month+1)
  }
  return result;
}

function convertToDate(str){
  let [year, month] = str.split('-');
  return new Date(year,parseInt(month,10))
}
console.log(getRangeMonth("2018-08", "2018-12")); // [ '2018-09', '2018-10', '2018-11' ]
```
