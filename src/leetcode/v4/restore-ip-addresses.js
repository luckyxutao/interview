/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
    if(!s||!s.length){
        return []
    }
    let res = [];
    let path = [];
    dfsHelper(s,0,path,res)
    return res;
    
};
//起始位置
function dfsHelper(s,pos,path,res){
    if(path.length === 4){
        if(pos === s.length){
            res.push(path.join('.'));
        }
        return;
    }
    for(let i = 1;i<=3;i++){
        if(pos+i > s.length){
            break
        }
        let segment  = s.substr(pos,i);
        if(/^0/.test(segment) && segment.length > 1 || parseInt(segment,10)>255){
            break;
        }
        path.push(segment);
        dfsHelper(s,pos+i,path,res);
        path.pop();
    }

}
restoreIpAddresses('0000')
