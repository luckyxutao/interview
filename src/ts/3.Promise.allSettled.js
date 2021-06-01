Promise.allSettled = function(promiseArr){
    let len = promiseArr.length;
    let count = 0;
    let results = [];
    return new Promise((resolve,reject)=>{
        for(let i = 0;i<len;i++){
            if(promiseArr[i] instanceof Promise){
                promiseArr[i].then(res=>{
                    results[i] = {
                        status:'fulfilled',
                        value: res
                    };
                    count++;
                    if(count === len){
                        resolve(results)
                    }
                },err=>{
                    results[i] = {
                        status:'rejected',
                        reason:err
                    }
                    count++;
                    if(count === len){
                        resolve(results)
                    }
                })
            } else {
                results[i] = {
                    status:'fulfilled',
                    value: promiseArr[i]
                };
                count++;
                if(count === len){
                    resolve(results)
                }
            }
        }
    })
}

const promise1 = Promise.resolve(3);
const promise2 = new Promise((resolve, reject) => setTimeout(reject, 100, 'foo'));
const promises = [promise1, promise2];

Promise.allSettled(promises).
  then((results) => results.forEach((result) => console.log(result.status)));

// expected output:
// "fulfilled"
// "rejected"
