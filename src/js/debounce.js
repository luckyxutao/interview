function debounce(fn, delay) {
    let timer;
    return function (...args) {
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            fn.apply(this, args)
        }, delay);
    }
}


function print(){
    console.log('aaaa');
    
}
let myPrint = debounce(print,500);
let intervalId = setInterval(() => {
    myPrint()
}, 100);

setTimeout(() => {
    clearInterval(intervalId)
},3000);