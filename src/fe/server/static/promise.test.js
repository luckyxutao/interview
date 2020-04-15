var Promise = require('./promise');
var assert = require('assert');

var a = {
    a : { b : 'c'}
}
var b = {
    a : { b : 'c'}
}


assert.deepEqual(a,b)
// Promise.allSettled([
//     Promise.resolve(33),
//     new Promise(resolve => setTimeout(() => resolve(66), 0)),
//     99,
//     Promise.reject(new Error('an error'))
//   ])
//   .then(values => console.log(values));

// var resolved = Promise.resolve(42);
// var rejected = Promise.reject(-1);
 
// Promise.allSettled([resolved, rejected]).then(function (results) {
//     debugger
//     assert.deepEqual(results, [
//         { status: 'fulfilled', value: 42 },
//         { status: 'rejected', reason: -1 }
//     ]);
// }).catch(error=>{
//     console.log(error)
// })
// assert.deepEqual([
//     { status: 'fulfilled', value: 88888 },
//     { status: 'rejected', reason: -1 }
// ],[{ status: 'fulfilled', value: 888 },
// { status: 'rejected', reason: -1 }])

// Promise.allSettled([
//     Promise.resolve(33),
//     new Promise(resolve => setTimeout(() => resolve(66), 100)),
//     new Promise(resolve => setTimeout(() => resolve(88), 20)),
//     99,
//     Promise.reject(new Error('an error'))
// ])
//     .then(values => {
//         console.log(values)
//     });

//   // [
//   //   {status: "fulfilled", value: 33},
//   //   {status: "fulfilled", value: 66},
//   //   {status: "fulfilled", value: 99},
//   //   {status: "rejected",  reason: Error: an error}
//   // ]


// //   Promise.reject(new Error('an error')).then(null,fail=>{
// //       debugger
// //   })