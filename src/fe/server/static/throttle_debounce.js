
function debounce(fn, delay) {
    var timerId;
    return function (...args) {
        if (timerId) {
            clearTimeout(timerId);
        }
        timerId = setTimeout(() => {
            return fn.apply(this, args)
        }, delay);
    }
}

function throttle(fn, delay) {
    var runinig = false;
    return function (...args) {
        if (runinig) {
            return;
        }
        runinig = true;
        setTimeout(() => {
            fn.apply(this, args);
            runinig = false;
        }, delay);
    }
}

var ff = throttle(console.log, 1000);
var count=0;
var id = setInterval(() => {
    ff(count)
    count++;
    if(count>1000){
        clearInterval(id);
    }
}, 500);
