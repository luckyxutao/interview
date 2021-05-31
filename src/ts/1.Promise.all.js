Promise.all = function(promiseArr){
    let resolvedCount = 0;
    let len = promiseArr.length;
    let results = [];
    return new Promise((resolve,reject)=>{
        for(let i = 0;i<promiseArr.length;i++){
            if(promiseArr[i] instanceof Promise){
                promiseArr[i].then(res=>{
                    results[i] = res;
                    resolvedCount++;
                    if(resolvedCount === len){
                        resolve(results);
                    }
                },err=>{
                    reject(err);
                })
            } else {
                results[i] = promiseArr[i];
                resolvedCount++;
                if(resolvedCount === len){
                    resolve(results);
                }
            }

        }
    });
}
var p1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('p1_delayed_resolution'), 1000);
  });
  
  var p2 = new Promise((resolve, reject) => {
    reject(new Error('p2_immediate_rejection'));
  });
  
  Promise.all([
    p1.catch(error => { return error }),
    p2.catch(error => { return error }),
  ]).then(values => {
    console.log(values[0]) // "p1_delayed_resolution"
    console.error(values[1]) // "Error: p2_immediate_rejection"
  })
  