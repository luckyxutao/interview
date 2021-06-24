/*
题目：红灯三秒亮一次，绿灯一秒亮一次，黄灯2秒亮一次；如何让三个灯不断交替重复亮灯？（用 Promse 实现）

三个亮灯函数已经存在：

function red(){
    console.log('red');
}
function green(){
    console.log('green');
}
function yellow(){
    console.log('yellow');
}

*/

function red(){
    console.log('red');
}
function green(){
    console.log('green');
}
function yellow(){
    console.log('yellow');
}

function light(cb,delay){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(cb());
        },delay)
    })
}

async function  step(){
    await light(red,3000);
    await light(green,2000);
    await light(yellow,1000);
    step()
}
step();