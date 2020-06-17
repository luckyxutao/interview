#! /usr/bin/env node
console.log('aaa');

console.log(process.argv.slice(2).reduce((prev,next)=>prev+next));
