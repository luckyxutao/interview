
/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    if(!path){
        return ''
    }
    let pathArr = path.split('/');
    let res = [];
    while(pathArr.length){
        let dir = pathArr.shift();
        if(dir === '.'||dir===''){
            continue;
        }
        if(dir === '..'){
            res.pop();
            continue
        }
        res.push(dir);
    }
    return '/' + res.join('/')
};
console.log(simplifyPath('/a/./b/../../c/'));
/*
给你一个字符串 path ，表示指向某一文件或目录的 Unix 风格 绝对路径 （以 '/' 开头），请你将其转化为更加简洁的规范路径。

在 Unix 风格的文件系统中，一个点（.）表示当前目录本身；此外，两个点 （..） 表示将目录切换到上一级（指向父目录）；两者都可以是复杂相对路径的组成部分。任意多个连续的斜杠（即，'//'）都被视为单个斜杠 '/' 。 对于此问题，任何其他格式的点（例如，'...'）均被视为文件/目录名称。

请注意，返回的 规范路径 必须遵循下述格式：

始终以斜杠 '/' 开头。
两个目录名之间必须只有一个斜杠 '/' 。
最后一个目录名（如果存在）不能 以 '/' 结尾。
此外，路径仅包含从根目录到目标文件或目录的路径上的目录（即，不含 '.' 或 '..'）。
返回简化后得到的 规范路径 。

 

示例 1：

输入：path = "/home/"
输出："/home"
解释：注意，最后一个目录名后面没有斜杠。 
示例 2：

输入：path = "/../"
输出："/"
解释：从根目录向上一级是不可行的，因为根目录是你可以到达的最高级。
示例 3：

输入：path = "/home//foo/"
输出："/home/foo"
解释：在规范路径中，多个连续斜杠需要用一个斜杠替换。
示例 4：

输入：path = "/a/./b/../../c/"
输出："/c"


来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/simplify-path
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    let size1 = num1.length, size2 = num2.length;
    let res = [];
    for(let i=size1-1;i>=0;i--){
      for(let j = size2-1;j>=0;j--){
        let p1 = i+j,p2 = i+j+1;
        let mul = (num1.charAt(i)-0) * (num2.charAt(j)-0);
        let sum = mul + (res[p2]||0);
        res[p2] = sum % 10;
        res[p1] = (res[p1]||0) + Math.floor(sum /10);
      }
    }
    console.log(res);
    let i = 0;
    while(i<res.length && res[i]===0){
        i++;
    }
    return res.slice(i).join('')
  };


console.log(multiply('0','0'))

/*
输入: num1 = "123", num2 = "456"
输出: "56088"
*/






/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function(n, k) {
    let candiate = [];
    let tmp = 1;
    let factorial = [];
    for(let i = 1;i<=n;i++){
        candiate.push(i); 
        tmp*=i;
        factorial.push(tmp);
    }
    //factorial[0,6]
    let i = n-1;
    let res = '';
    // candate [1,2,3,4]
    while(i>=0){
        let dgtIndex = Math.ceil(k/factorial[i-1]);
        res+=candiate.splice(dgtIndex-1,1);
        k = k % factorial[i-1];
        i--;
    }
   return res;
};
/*

输入：n = 4, k = 9
输出："2314"
*/
getPermutation(4,9)


/*

string multiply(string num1, string num2) {
    int m = num1.size(), n = num2.size();
    // 结果最多为 m + n 位数
    vector<int> res(m + n, 0);
    // 从个位数开始逐位相乘
    for (int i = m - 1; i >= 0; i--)
        for (int j = n - 1; j >= 0; j--) {
            int mul = (num1[i]-'0') * (num2[j]-'0');
            // 乘积在 res 对应的索引位置
            int p1 = i + j, p2 = i + j + 1;
            // 叠加到 res 上
            int sum = mul + res[p2];
            res[p2] = sum % 10;
            res[p1] += sum / 10;
        }
    // 结果前缀可能存的 0（未使用的位）
    int i = 0;
    while (i < res.size() && res[i] == 0)
        i++;
    // 将计算结果转化成字符串
    string str;
    for (; i < res.size(); i++)
        str.push_back('0' + res[i]);
    
    return str.size() == 0 ? "0" : str;
}


*/










// /**
//  * @param {string} num1
//  * @param {string} num2
//  * @return {string}
//  */
// var addStrings = function(num1, num2) {
//     num1 = num1.split('').map(v=>parseInt(v,10))
//     num2 = num2.split('').map(v=>parseInt(v,10))
//     let n1, n2;
//     let jinWei = 0;
//     let res = '';
//     while(num1.length||num2.length){
//         n1 = num1.pop()||0;
//         n2 = num2.pop()||0;
//         let cal = (n1+ n2 + jinWei);
//         let re = cal%10;
//         jinWei = Math.floor(cal /10);
//         res = re + res
//     }
//     if(jinWei){
//         res = 1 +res;
//     }
//     return res;
// };
// /*
//  6 2 3
//  5 8 9 

// */
// console.log(addStrings('23','589'));

/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
    let res = [];
    dfsHelper(s,[],0,res);
    console.log(res);
    return res;
};

function dfsHelper(s,path,start,res){
    /*
    1. path length为4
    2. s字符串用完
    */
    if(path.length === 4){
        if(start===s.length){
            res.push(path.join(','));
        }
        return;
    }

    for(let i = 1;i<=3;i++){
        let sub = s.slice(start,start+i);
        if((sub.startsWith('0')&&sub.length>1||parseInt(sub,10)>255)){
            break;
        }
        path.push(sub);
        dfsHelper(s,path,start+i,res);
        path.pop();
    }
}
restoreIpAddresses('101023')
/*

输入：s = "25525511135"
输出：["255.255.11.135","255.255.111.35"]

*/