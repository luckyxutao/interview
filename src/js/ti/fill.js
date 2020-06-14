
function fill(n) {
    if (n === 0) {
        return []
    }
    return fill(n - 1).concat(n - 1);
}

let re = fill(10);
console.log(re);
