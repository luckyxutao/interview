var lastRemaining = function (n, m) {
    let pos = 0;
    for (i = 2; i <= n; i++) {
        pos = (pos + m )%i;
    }
    return pos;
};
lastRemaining(70866, 116922)