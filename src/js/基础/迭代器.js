// const likeArray = {
//     0: 'a',
//     1: 'b',
//     2: 'c',
//     3: 'd',
//     length: 4
// };
// // likeArray[Symbol.iterator] = function () {
// //     let i = 0;
// //     return {
// //         next:()=> {
// //             return { value: this[i], done: i++===this.length }
// //         }
// //     }
// // }

// // likeArray[Symbol.iterator] = function *() {
// //     let i = 0;
// //     while(i!==this.length){
// //         yield this[i++];
// //     }
// // }
// // let s = [...likeArray]
// // console.log(s);
// function* read(x) {
//     let a = 5 + (yield 1);
//     // console.log(a);
//     let b = yield 2;
//     // console.log(b);
//     let c = yield 3;
//     // console.log(c);
//     return c;
// }

// let it = read();
// console.log(it.next());
// console.log(it.next(8));
// console.log(it.next(3));
// // // console.log(it.next());



// // console.log((Array.from(likeArray)));


// const co = it => {
//     return new Promise((resolve, reject) => {
//         function next(data) {
//             const { value, done } = it.next(data);
//             if (!done) {
//                 Promise.resolve(value).then(next, reject);
//             } else {
//                 resolve(value);
//             }
//         }
//         next();
//     });
// }

// /*
// 1. async 结果是一个promise
// 2. await是后边语句放到promise的then回调里了











// */

// async function async1() {
//     console.log('async1 start');
//     await async2();
//     console.log('async1 end');
// }
// async function async2() {
//     console.log('async2');
// }
// console.log('script start');
// setTimeout(() => {
//     console.log('timeout1');
// }, 0);
// async1();
// new Promise((resolve) => {
//     console.log('promise1');
//     resolve();
// }).then(() => {
//     console.log('promise2');
// });
// console.log('script end');
/*
    宏任务[timeout1]
    微任务['async1 end',promise2]
    1. script start
    2. async1 start
    3. async2
    4. promise1
    5. script end
    6. async1 end
    7. promise2
    8. timeout1
*/

let p1 = new Promise((resolve) => {
    resolve('1111')

}).then(res => {
    debugger
    console.log(('sub', res));

});
p1.then(res => {
    debugger
    console.log('p1', res);

});