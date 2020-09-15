// StringBuilder sb = new StringBuilder();
// // 候选数字
// List<Integer> candidates = new ArrayList<>();
// // 分母的阶乘数
// int[] factorials = new int[n+1];
// factorials[0] = 1;
// int fact = 1;
// for(int i = 1; i <= n; ++i) {
//     candidates.add(i);
//     fact *= i;
//     factorials[i] = fact;
// }
// k -= 1;
// for(int i = n-1; i >= 0; --i) {
//     // 计算候选数字的index
//     int index = k / factorials[i];
//     sb.append(candidates.remove(index));
//     k -= index*factorials[i];
// }
// return sb.toString();
// }

/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function(n, k) {
    let candidates = [];
    let fact = [1];
    let tmp = 1;
    for(let i=1;i<=n;i++){
        candidates.push(i); //[1,2,3,4]
        tmp*=i;
        fact[i] = tmp;
    }
    let str = '';
    for(let i=n-1;i>=0;i-- ){
        let index = Math.ceil(k/fact[i]);
        str+=candidates.splice(index-1,1);
        k = k % fact[i];
    }
    return str;
};
console.log(getPermutation(3,3))

/*
    candidates:[1,2,3] [,3]
    n,3 k = 3
    1 2 3
    1 3 2
    2 1 3
    2 3 1

*/