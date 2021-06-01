Promise.any = function(promiseArr){
    let rejectedCount = 0;
    let len = promiseArr.length;
    let results = [];
    return new Promise((resolve,reject)=>{
        for(let i = 0;i<promiseArr.length;i++){
            if(promiseArr[i] instanceof Promise){
                promiseArr[i].then(res=>{
                    resolve(res);
                },err=>{
                    results[i] = err;
                    rejectedCount++;
                    if(rejectedCount === len){
                        reject(results);
                    }
                });
            } else {
                resolve(promiseArr[i]);
            }
        }
    });
}
const pErr = new Promise((resolve, reject) => {
    reject('总是失败');
  });
  
  Promise.any([pErr]).catch((err) => {
    console.log(err);
  })
// const pErr = new Promise((resolve, reject) => {
//     reject("总是失败");
//   });
  
//   const pSlow = new Promise((resolve, reject) => {
//     setTimeout(resolve, 500, "最终完成");
//   });
  
//   const pFast = new Promise((resolve, reject) => {
//     setTimeout(resolve, 100, "很快完成");
//   });
  
//   Promise.any([pErr, pSlow, pFast]).then((value) => {
//     console.log(value);
//     // pFast fulfils first
//   })