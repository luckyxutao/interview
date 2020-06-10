function Promise(executor) {
    this.status = 'pending';
    this.value = undefined;
    this.onResolvedCallbacks = [];
    this.onRejectedCallbacks = [];

    const resolve = (value) => {
        setTimeout(() => {
            if (this.status === 'pending') {
                this.status = 'resolved';
                this.value = value;
                this.onResolvedCallbacks.forEach(fn => fn(value));
            }
        }, 0)
    }

    const reject = (value) => {
        setTimeout(() => {
            if (this.status === 'pending') {
                this.status = 'rejected';
                this.value = value;
                this.onRejectedCallbacks.forEach(fn => fn(value));
            }
        }, 0)
    }

    try {
        executor(resolve, reject)
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
                then.call(x, y => {
                    if (called) {
                        return
                    }
                    called = true;
                    resolvePromise2(promise2, y, resolve, reject);
                }, r => {
                    if (called) {
                        return
                    }
                    called = true;
                    reject(r);
                })
            } else {
                if (called) {
                    return
                }
                called = true;
                resolve(x);
            }
        } catch (error) {
            if (called) {
                return
            }
            called = true;
            reject(error);
        }
    } else {
        resolve(x);
    }
}

Promise.prototype.then = function (onFullfilled, onRejected) {
    onFullfilled = typeof onFullfilled === 'function' ? onFullfilled : res => res;
    onRejected = typeof onRejected === 'function' ? onRejected : err => { throw err; }
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
            }, 0)
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
            }, 0)
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