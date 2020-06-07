function throttle(fn, delay) {
    let timeout;
    return (...args) => {
        if(!timeout){
            fn.apply(this,args);
            timeout = true;
            setTimeout(()=>{
                timeout = false;
            },delay);
        }
    }
}

function debounce(fn, delay) {
    let timerId;
    return (...args) => {
        if (timerId) {
            clearTimeout(timerId);
        }
        timerId = setTimeout(() => {
            fn.apply(this, args);
        }, delay)
    }

}

function greet(msg) {
    console.log(msg);
}

// let fn = debounce(greet, 200);
// setTimeout(() => {
//     fn('111')
// }, 50)
// setTimeout(() => {
//     fn('2222')
// }, 50)
// setTimeout(() => {
//     fn('333')
// }, 300)
// setTimeout(() => {
//     fn('4444')
// }, 800)
