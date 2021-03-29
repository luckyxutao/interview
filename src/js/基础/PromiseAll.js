// console.log(Promise);


Promise.all = function(promiseArr){
    let values = [];
    let size = promiseArr.length;
    let count = 0;
    return new Promise((resolve,reject)=>{
        for(let i = 0;i<promiseArr.length;i++){
            promiseArr[i].then(res=>{
                values[i] = res;
                count++;
                if(count === size){
                    resolve(values);
                }
            },err=>{
                reject(err);
            });
        }
    });
}
var p1 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve('ok')
    }, 2000);
});
var p2 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        reject('222222')
    }, 1000);
})
Promise.all([p1,p2]).then(res=>{
    console.log(res);
})