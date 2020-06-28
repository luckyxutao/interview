/**
 * @param {number[]} postorder
 * @return {boolean}
 */
var verifyPostorder = function(postorder) {
    if(!postorder||!postorder.length){
        return true;
    }
    return verifyPostorderHelper(postorder,0,postorder.length-1);

};

function verifyPostorderHelper(postorder,lo,hi){
    if(lo>=hi){
        return true;
    }
    //最后一个元素是root
    let root = postorder[hi];
    let start = lo;
    while(start<hi && postorder[start] < root){
        start++;
    }
    let splitor = start;
    while(start<hi && postorder[start]>root){
        start++;
    }
    if(start !== hi){
        return false;
    }
    return verifyPostorderHelper(postorder,lo,splitor-1) && verifyPostorderHelper(postorder,splitor,hi-1);
}

console.log(verifyPostorder([4, 8, 6, 12, 16, 14, 10]))