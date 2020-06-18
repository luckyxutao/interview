function co(gen) {
    return new Promise((resolve, reject) => {
        let g = gen();
        function next(lastValue) {
            let { done, value } = g.next(lastValue);
            if (done) {
                resolve(value);
            } else {
                if (value instanceof Promise) {
                    value.then(next, (val) => {
                        reject(val);
                    });
                } else {
                    next(value);
                }
            }
        }
        next();
    });
}


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

function asyncFn(fn) {
    return co(fn);
}

asyncFn(fn);