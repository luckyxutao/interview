## 拓展
### Promise
* [Promise.all-1](./src/ts/1.Promise.all.js)
* [Promise.any-1](./src/ts/2.Promise.any.js)
* [Promise.allSettled-1](./src/ts/3.Promise.allSettled.js)
* [deepClone-3](a)

### ES6
* [WeakMap-1](https://juejin.cn/post/6844903646623186958)


### 笔试
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
