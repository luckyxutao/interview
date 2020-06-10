function curry(fn, ...args) {
    if (args.length >= fn.length) {
        return fn(...args);
    }
    return function (...args2) {
        return curry(fn, ...args, ...args2)
    }
}

function multiFn(a, b, c) {
    console.log(a * b * c);
}

var multi = curry(multiFn);

multi(2)(3)(4);
multi(2, 3, 4);
multi(2)(3, 4);
multi(2, 3)(4);
