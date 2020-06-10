// // const path = require('path');
// // const { join,dirname} = path.posix;//保证不同操作系统唯一性，不同系统分割符不一样

// // var a = './src' + './hello.js'
// // console.log(join( './src' ,'./hello.js'));


// // var aa = new Map();
// // var s = {};
// // var s2 = {};
// // aa.set(s,1);
// // aa.set(s2,1);
// // // console.log(aa.)
// // console.log(aa.size)
// // var f = {
// //     a: function () {

// //     },
// //     d: [1, 2, 3],
// //     b: new Date(),
// //     c: new RegExp()
// // }

// var arr = [1,2,3,4];
// let date = new Date();
// var inst = new arr.constructor();
// for(let ele in arr){
//     inst[ele] = arr[ele]
// }
// console.log(inst);


// // console.log(JSON.stringify(f));
var obj = Object.create(null);
console.log(obj.hasOwnProperty('a'));
