
function throttle(fn,delay){
    let timeout;
    return function(...args){
        if(!timeout){
            fn(...args);
        } else {
            return;
        }
        timeout = true;
        setTimeout(() => {
            timeout = false;
        }, delay);
    }
}


function print(){
    console.log('aaaa');
    
}
let myPrint = throttle(print,1000);
let intervalId = setInterval(() => {
    myPrint()
}, 100);

setTimeout(() => {
    clearInterval(intervalId)
},5000);