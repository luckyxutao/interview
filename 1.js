const path = require('path');
const { join,dirname} = path.posix;//保证不同操作系统唯一性，不同系统分割符不一样

var a = './src' + './hello.js'
console.log(join( './src' ,'./hello.js'));


