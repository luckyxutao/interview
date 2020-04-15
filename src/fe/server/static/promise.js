
function Promise(executor) {
    var self = this;
    self.status = 'pending';
    self.value = undefined;
    self.onResolvedCallbacks = [];
    self.onRejectedCallbacks = [];
    function resolve(value) {
        setTimeout(() => {
            if (self.status === 'pending') {
                self.status = 'resolved';
                self.value = value;
                self.onResolvedCallbacks.forEach(fn => fn(value))
            }
        }, 0);
    }
    function reject(reason) {
        setTimeout(() => {
            if (self.status === 'pending') {
                self.status = 'rejected';
                self.value = reason;
                self.onRejectedCallbacks.forEach(fn => fn(reason))
            }
        }, 0);
    }
    try {
        executor(resolve, reject);
    } catch (error) {
        reject(error);
    }
}
/**
 * 1. return 一个Promise
 * 2. pending\resolve\rejected
 */
Promise.prototype.then = function (onFulfilled, onRejected) {

    let promise2;
    let self = this;
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value;
    onRejected = typeof onRejected === 'function' ? onRejected : reason => { throw reason }
    if (self.status === 'resolved') {
        promise2 = new Promise((resolve, reject) => {
            setTimeout(() => {
                try {
                    var x = onFulfilled(self.value);
                    resolvePromise(promise2, x, resolve, reject);
                } catch (error) {
                    reject(error);
                }
            }, 0);
        })
    }
    if (self.status === 'rejected') {
        promise2 = new Promise((resolve, reject) => {
            setTimeout(() => {
                try {
                    var x = onRejected(self.value);
                    resolvePromise(promise2, x, resolve, reject);
                } catch (error) {
                    reject(error);
                }
            }, 0);
        })
    }
    if (self.status === 'pending') {
        promise2 = new Promise((resolve, reject) => {
            self.onResolvedCallbacks.push(() => {
                try {
                    var x = onFulfilled(self.value);
                    resolvePromise(promise2, x, resolve, reject);
                } catch (error) {
                    reject(error);
                }
            });
            self.onRejectedCallbacks.push(() => {
                try {
                    var x = onRejected(self.value);
                    resolvePromise(promise2, x, resolve, reject);
                } catch (error) {
                    reject(error);
                }
            });
        });
    }
    return promise2;

}

Promise.prototype.catch = function (onRejected) {
    this.then(null, onRejected);
}
Promise.resolve = function (val) {
    return new Promise((resolve) => {
        resolve(val);
    })
}
Promise.reject = function (reason) {
    return new Promise((resolve, reject) => {
        reject(reason);
    })
}


Promise.allSettled = function (promiseArr) {
    let results = [];
    let count = 0;
    return new Promise((resolve, reject) => {
        for (let i = 0; i < promiseArr.length; i++) {
            var curr = promiseArr[i];
            if (curr instanceof Promise) {
                curr.then(res => {
                    results[i] = {
                        status: 'fulfilled',
                        value: res
                    }
                    count++;
                    if (count >= promiseArr.length) {
                        resolve(results);
                    }
                }, err => {
                    results[i] = {
                        status: 'rejected',
                        reason: err
                    }
                    count++;
                    if (count >= promiseArr.length) {
                        resolve(results);
                    }
                })
            } else {
                results[i] = {
                    status: 'fulfilled',
                    value: curr
                }
                count++;
                if (count >= promiseArr.length) {
                    resolve(results);
                }
            }
        }
    });
}


function resolvePromise(promise2, x, resolve, reject) {
    if (x === promise2) {
        return reject(new TypeError('circle'))
    }
    let called, then;
    if (x !== null && (typeof x === 'object' || typeof x === 'function')) {
        try {
            then = x.then;
            if (typeof then === 'function') {
                then.call(x, function (y) {
                    if (called) return;
                    called = true;
                    resolvePromise(promise2, y, resolve, reject);
                }, function (r) {
                    if (called) return;
                    called = true;
                    reject(r);
                })
            } else {
                resolve(x);
            }
        } catch (error) {
            if (called) return;
            called = true;
            reject(error);
        }
    } else {
        resolve(x);
    }
}
Promise.deferred = Promise.defer = function () {
    var defer = {};
    defer.promise = new Promise(function (resolve, reject) {
        defer.resolve = resolve;
        defer.reject = reject;
    })
    return defer;
}
/**
 * npm i -g promises-aplus-tests
 * promises-aplus-tests Promise.js
 */
try {
    module.exports = Promise
} catch (e) {
}
