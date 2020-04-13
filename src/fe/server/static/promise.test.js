var Promise = require('./promise');


var p = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('ok')
    }, 1000);
}).then(res => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('5555')
        }, 2000);
    });
}).then(res => {
    console.log(res);
})