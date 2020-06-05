
function Promise(executor) {
    let self = this;
    this.status = 'pending';
    this.value = undefined;
    this.onResolvedCallbacks = [];
    this.onRejectedCallbacks = [];
    function resolve(value) {
        setTimeout(() => {
            if (self.status === 'pending') {
                self.status = 'resolved';
                self.value = value;
                self.onResolvedCallbacks.forEach(fn => fn(self.value))
            }
        }, 0)
    }

    function reject(reason) {
        setTimeout(() => {
            if (self.status === 'pending') {
                self.status = 'rejected';
                self.value = reason;
                self.onRejectedCallbacks.forEach(fn => fn(self.value));
            }
        }, 0);

    }

    try {
        executor(resolve, reject);
    } catch (error) {
        reject(error);
    }
}

function resolvePromise2(promise2, x, resolve, reject) {
    if (x === promise2) {
        return reject(new TypeError('循环引用'));
    }
    let then, called;
    if (x !== null && (typeof x === 'object' || typeof x === 'function')) {
        try {
            then = x.then;
            if (typeof then === 'function') {
                then.call(x, y => {
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
                });
            } else {
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
    onRejected = typeof onRejected === 'function' ? onRejected : error => { throw error }
    let promise2;
    if (this.status === 'resolved') {
        promise2 = new Promise((resolve, reject) => {
            setTimeout(() => {
                try {
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
                    let x = onRejected(this.value);
                    resolvePromise2(promise2, x, resolve, reject);
                } catch (error) {
                    reject(error);
                }
            }, 0);
        });
    } else if (this.status === 'pending') {
        promise2 = new Promise((resolve, reject) => {
            this.onResolvedCallbacks.push((value) => {
                try {
                    let x = onFullfilled(value);
                    resolvePromise2(promise2, x, resolve, reject);
                } catch (error) {
                    reject(error);
                }
            });
            this.onRejectedCallbacks.push((value) => {
                try {
                    let x = onRejected(value);
                    resolvePromise2(promise2, x, resolve, reject);
                } catch (error) {
                    reject(error);
                }
            });
        });
    }
    return promise2;
};

Promise.deferred = Promise.defer = function () {
    var defer = {};
    defer.promise = new Promise((resolve, reject) => {
        defer.resolve = resolve;
        defer.reject = reject;
    })
    return defer;
}
module.exports = Promise;

// let res = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('11111')
//     }, 1000)
// }).then(res => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             reject(res);
//         }, 1000)
//     });
// }).then(ok => {
//     console.log('ok' + ok);
// }, err => {
//     console.log('err' + err);
// })