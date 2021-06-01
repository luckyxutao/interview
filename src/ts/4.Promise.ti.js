// const promise = new Promise((resolve, reject) => {
//     resolve('success1');
//     reject('error');
//     resolve('success2');
// });

// promise.then((res) => {
//     console.log('then:', res);
// }).catch((err) => {
//     console.log('catch:', err);
// })


// Promise.resolve(1)
//   .then(2)
//   .then(Promise.resolve(3))
//   .then(console.log)


//   Promise.resolve(1).then(res=>{
//       console.log(res)
//   })

function red() {
    console.log('red');
}
function green() {
    console.log('green');
}
function yellow() {
    console.log('yellow');
}
var light = function(delay,cb){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            cb();
            resolve()
        }, delay);
    });
}
var step = function(){
    Promise.resolve().then(res=>{
        return light(3000,red);
    }).then(res=>{
        return light(2000,green)
    }).then(res=>{
        return light(1000,yellow)
    }).then(()=>{
        step()
    });
}
step()
// https://segmentfault.com/a/1190000016848192