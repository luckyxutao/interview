/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {

    let need = {};
    for (let c of s1) {
        need[c] = (need[c] || 0) + 1;
    }
    //target需要的字符和数量
    /*
        s1 = {
            a : 1,
            b : 2
        }
    */
    let winInfo = {};
    let lo = 0, hi = 0;
    while (hi < s2.length) {
        //放入窗口
        let c = s2.charAt(hi);
        winInfo[c] = (winInfo[c] || 0) + 1;
        hi++;
        //调整窗口,目标串里不需要c
        while (hi-lo> s1.length) {
            let sc = s2.charAt(lo);
            if (winInfo[sc] === 1) {
                delete winInfo[sc];
            } else {
                winInfo[sc]--;
            }
            lo++;
        }
        //窗口信息，小于或等于s.length
        if (compareObj(need, winInfo)) {
            return true;
        }
    }
     return false;
};
//以obj1为主，obj1所有key存在 于obj2，则true
function compareObj(obj1, obj2) {

    for (let key in obj1) {
        if (obj2[key] !== obj1[key]) {
            return false;
        }
    }
    return true;
}
console.log(checkInclusion('hello', 'ooolleoooleh'))
