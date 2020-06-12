/**
 * @param {number} n
 * @return {number[]}
 * https://cloud.tencent.com/developer/article/1176920
 */
/*
[1,2,3,4,5,6]
[1,2,3,4,5,6]
n骰子和为s的个数
f(n,s) = f(2,6) = 
1,5
2,4
3,3
4,2
5,1
 <!-- f(3,6) = n=3  s=6
* `当前f(n,s) = 当前点数 + f(骰子-1,总点数-当前点数)`
* 让每个骰子所有点数(1-6)和都少一个骰子的情况对比，找出和为sum的组合
         当前点数     需要骰数,需要凑的和
            i        f(3-1,sum-i)
f(3,6) =    1        f(3-1,s-1)
       =    2        f(3-1,s-2)
       =    3        f(3-1,s-3)
       =    4        f(3-1,s-4)
       =    5        f(3-1,s-5)
       =    6        f(3-1,s-6)
       .... -->

f(3,6) = n=3  s=6
         i
f(3,6) = 1 + f(n-1,s-1)
       = 2 + f(n-1,s-2)
       = 3 + f(n-1,s-3)
       = 4 + f(n-1,s-4)
       = 5 + f(n-1,s-5)
       = 6 + f(n-1,s-6)
       ....
解题思路： 
 第一步，确定问题解的表达式。可将f(n, s) 表示n个骰子点数的和为s的排列情况总数。 
 第二步，确定状态转移方程。n个骰子点数和为s的种类数只与n-1个骰子的和有关。因为一个骰子有六个点数，那么第n个骰子可能出现1到6的点数。所以第n个骰子点数为1的话，f(n,s)=f(n-1,s-1)，当第n个骰子点数为2的话，f(n,s)=f(n-1,s-2)，…，依次类推。在n-1个骰子的基础上，再增加一个骰子出现点数和为s的结果只有这6种情况！那么有：

f(n,s)=f(n-1,s-1)+f(n-1,s-2)+f(n-1,s-3)+f(n-1,s-4)+f(n-1,s-5)+f(n-1,s-6) ，0< n<=6n 
 f(n,s)=0,   s< n or s>6n

上面就是状态转移方程，已知初始阶段的解为： 
 当n=1时, f(1,1)=f(1,2)=f(1,3)=f(1,4)=f(1,5)=f(1,6)=1。
*/
var twoSum = function (n) {
    // let re = 0;
    //n=2的话，sum= {2,12}
    //结果sum范围(n...6n)
    let res = [];
    let total = Math.pow(6,n);
    for (let i = n; i <= 6 * n; i++) {
        //n个骰子需要凑 和为s(即i)
        let re = helper(n, i);
        res.push(re /total)
        console.log(`${i}由${n}个骰子组成的排列总数为${re}`)
    }
    debugger
    // return re;
};

function helper(n, sum) {

    if (sum < n || sum > 6 * n) {
        return 0;
    }
    if (n === 1) {
        return 1;
    }
    let re = 0;
    /*
        骰子数-1来尝试sum-i

        每个骰子都有6种情况
    */
    for (let i = 1; i <= 6; i++) {
        re = re + helper(n - 1, sum - i);
    }
    return re;
}
twoSum(2);

/*
    2=>2
    2=>3
    2=>4
    2=>5
    2=>6
    2=>7
    2=>8
    2=>9
    2=>10
    2=>11
    2=>12




*/