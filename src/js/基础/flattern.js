let arr = [
    [1],
    [2, 3],
    [4, 5, 6, [7, 8, [9, 10, [11]]]],
    12
];

function flat(arr) {
    let res = [];
    flatHelper(arr, res);
    return res;

}

function flatHelper(arr, res) {
    if (Array.isArray(arr)) {
        for (let i = 0; i < arr.length; i++) {
            if (Array.isArray(arr[i])) {
                flatHelper(arr[i], res);
            } else {
                res.push(arr[i])
            }
        }
    } else {
        res.push(arr);
    }
}

console.log(flat(arr))