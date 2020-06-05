
let Promise = require('./Promise')
// // promise.allSettled
// const promise1 = Promise.resolve(3);
// const promise2 = new Promise((resolve, reject) => setTimeout(reject, 100, 'foo'));
// const promises = [promise1, promise2];

// Promise.allSettled(promises).
//   then((results) => results.forEach((result) => console.log(result.status)));

// expected output:
// "fulfilled"
// "rejected"


// promise.race
// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(reject, 50, 'one');
//   });
  
//   const promise2 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 100, 'two');
//   });
  
//   Promise.race([promise1, promise2]).then((value) => {
//     console.log(value);
//     // Both resolve, but promise2 is faster
//   },err=>{
//       console.log('errr' + err)
//   });
//   // expected output: "two"
  



//Promis.all
var p1 = new Promise((resolve, reject) => { 
    setTimeout(() => resolve('one'), 1000); 
  }); 
  var p2 = new Promise((resolve, reject) => { 
    setTimeout(() => resolve('two'), 2000); 
  });
  var p3 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('three'), 3000);
  });
  var p4 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('four'), 4000);
  });
  var p5 = new Promise((resolve, reject) => {
    reject(new Error('reject'));
  });
  
  
  // Using .catch:
  Promise.all([p1, p2, p3, p4,p5])
  .then(values => { 
    console.log(values);
  })
  .catch(error => { 
    console.error(error.message)
  });
  

// var p1 = Promise.resolve(3);
// var p2 = 1337;
// var p3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("foo");
//   }, 100);
// }); 

// Promise.all([p1, p2, p3]).then(values => { 
//   console.log(values); // [3, 1337, "foo"] 
// });
// expected output: Array [3, 42, "foo"]


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