/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (t, s) {
    // unordered_map<char, int> need, window;
    let need = {};
    let window = {};
    // for (char c : t) need[c]++;
    for (const c of t) {
        need[c] = (need[c] || 0) + 1;
    }

    let left = 0, right = 0;
    let valid = 0;
    while (right < s.length) {
        let c = s.charAt(right);
        window[c] = (window[c] || 0) + 1;
        right++;

        // // // 判断左侧窗口是否要收缩
        while (right - left > t.length) {
            let d = s.charAt(left);
            left++;
            if(window[d] > 1){
                window[d]--;
            } else {
                delete window[d];
            }
        }
        if (deepEqual(need,window)){
            return true;
        }
    }
    // 未找到符合条件的子串
    return false;

}
function deepEqual(obj1,obj2){
    for(let k in obj1){
        if(obj1[k] !== obj2[k]){
            return false;
        }
    }
    return true;
}
/*
{
    a : 2,
    b : 1
}

*/
var s1 = "ab", s2 = "eidboaoo";
console.log(checkInclusion(s1, s2));


// let obj1 = {
//     a : 1,
//     b : 2
// };
// let obj2 = {
//     a : 1,
//     b : 1
// }




// console.log(deepEqual(obj1,obj2))