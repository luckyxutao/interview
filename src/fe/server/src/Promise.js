function Promise(executor) {
    this.status = 'pending';
    this.value = undefined;
    this.onResolvedCallbacks = [];
    this.onRejectedCallbacks = [];
    let self = this;
    function resolve(value) {
        /*
            1. 改status和value
            2. 调用callbacks
            3. 在另一个执行作用域
        */
        setTimeout(() => {
            if (self.status === 'pending') {
                self.value = value;
                self.status = 'resolved';
                self.onResolvedCallbacks.forEach(fn => fn(self.value));
            }
        }, 0);

    }
    function reject(error) {
        setTimeout(() => {
            if (self.status === 'pending') {
                self.value = error;
                self.status = 'rejected';
                self.onRejectedCallbacks.forEach(fn => fn(self.value));
            }
        }, 0);
    }
    /*
    1. 执行executor,并将resolve和reject传出去
    */
    try {
        executor(resolve, reject);
    } catch (error) {
        reject(error);
    }
}

function resolvePromise2(promise2, x, resolve, reject) {
    if (promise2 === x) {
        reject(new TypeError('circle detected'));
    }
    let called, then;
    if (x !== null && (typeof x === 'object' || typeof x === 'function')) {
        try {
            then = x.then;
            if (typeof then === 'function') {
                then.call(x, (y) => {
                    if (called) {
                        return;
                    }
                    called = true;
                    resolvePromise2(promise2, y, resolve, reject);
                }, r => {
                    if (called) {
                        return;
                    }
                    called = true;
                    reject(r);
                })
            } else {
                if (called) {
                    return;
                }
                called = true;
                resolve(x);
            }
        } catch (error) {
            if (called) {
                return;
            }
            called = true;
            reject(error);
        }

    } else {
        resolve(x);
    }
}


Promise.prototype.then = function (onFullfilled, onRejected) {
    onFullfilled = typeof onFullfilled === 'function' ? onFullfilled : value => value;
    onRejected = typeof onRejected === 'function' ? onRejected : err => { throw err };
    let promise2;
    if (this.status === 'resolved') {
        promise2 = new Promise((resolve, reject) => {
            setTimeout(() => {
                try {
                    //确定下x是普通值，还是promise
                    let x = onFullfilled(this.value);
                    resolvePromise2(promise2, x, resolve, reject);
                } catch (error) {
                    reject(error);
                }
            }, 0);
        });
    } else if (this.status === 'rejected') {
        promise2 = new Promise((resolve, reject) => {
            setTimeout(() => {
                try {
                    //确定下x是普通值，还是promise
                    let x = onRejected(this.value);
                    resolvePromise2(promise2, x, resolve, reject);
                } catch (error) {
                    reject(error);
                }
            }, 0);
        });
    } else if (this.status === 'pending') {
        /*
        1. 放入callbacks
        */
        promise2 = new Promise((resolve, reject) => {
            this.onResolvedCallbacks.push((value) => {
                try {
                    //确定下x是普通值，还是promise
                    let x = onFullfilled(value);
                    resolvePromise2(promise2, x, resolve, reject);
                } catch (error) {
                    reject(error);
                }

            });
            this.onRejectedCallbacks.push((value) => {
                try {
                    //确定下x是普通值，还是promise
                    let x = onRejected(value);
                    resolvePromise2(promise2, x, resolve, reject);
                } catch (error) {
                    reject(error);
                }
            });

        });
    }
    return promise2;
}

Promise.resolve = function (value) {
    return new Promise((resolve, reject) => {
        resolve(value);
    });
}

Promise.prototype.catch = function (onRejected) {
    this.then(null, onRejected);
}

Promise.allSettled = function (promiseArr) {
    let results = [];
    let promiseLen = promiseArr.length;
    let finishedCount = 0;
    return new Promise((resolve, reject) => {
        for (let i = 0; i < promiseLen; i++) {
            if (promiseArr[i] && promiseArr[i].then && typeof promiseArr[i].then === 'function') {
                promiseArr[i].then(res => {
                    results[i] = { status: 'fulfilled' }
                    finishedCount++;
                    if (finishedCount >= promiseLen) {
                        resolve(results);
                    }
                }, err => {
                    results[i] = { status: 'rejected' };
                    finishedCount++;
                    if (finishedCount >= promiseLen) {
                        resolve(results);
                    }
                });
            } else {
                results[i] = { status: 'fulfilled' };
                finishedCount++;
                if (finishedCount >= promiseLen) {
                    resolve(results);
                }
            }
        }
    });
}

Promise.all = function (promiseArr) {
    let results = [];
    let len = promiseArr.length;
    let finishedCount = 0;
    return new Promise((resolve, reject) => {
        for (let i = 0; i < len; i++) {
            if (promiseArr[i] && promiseArr[i].then && typeof promiseArr[i].then === 'function') {
                promiseArr[i].then(res => {
                    results[i] = res;
                    finishedCount++;
                    if (finishedCount >= len) {
                        resolve(results);
                    }
                }, err => {
                    reject(err);
                })
            } else {
                results[i] = promiseArr[i];
                finishedCount++;
                if (finishedCount >= len) {
                    resolve(results);
                }
            }
        }
    });
}

Promise.deferred = function () {
    let deferred = {};
    deferred.promise = new Promise((resolve, reject) => {
        deferred.resolve = resolve;
        deferred.reject = reject;
    });
    return deferred;
}

module.exports = Promise;