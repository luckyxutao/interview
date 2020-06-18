

function t1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('1000')
        }, 1000);
    });
}

function* fn() {
    let r1 = yield t1();
    let r2 = yield 'a';
    console.log(r1, r2);
}

function myAsync(fn){
    return co(fn);
}

function co(gen){
    return new Promise((resolve,reject)=>{
        const it = gen();
        function next(lastVal){
            const { done, value } = it.next(lastVal);
            if(done){
                resolve(value);
            } else {
                if(value instanceof Promise){
                    value.then(next,err=>{
                        reject(err);
                    })
                } else {
                    next(value);
                }
            }
        }

        next();

    });
}

myAsync(fn);