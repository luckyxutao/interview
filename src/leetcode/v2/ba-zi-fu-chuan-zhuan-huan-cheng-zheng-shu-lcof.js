var strToInt = function(str) {
    if(!str){
        return 0;
    }
    str = str.trim();

    let firstChar = str.charAt(0);
    if(firstChar !== '-' && firstChar !== '+'){
        str = '+' + str;
    }
    let sign = firstChar == '-' ? -1 : 1;
    let i = 1;
    let res = 0;
    while(i<str.length && isDigit(str.charAt(i))){
        let char = str.charAt(i);
        //如果是数字
        if(/^\d$/.test(char)){
            res = res*10 + parseInt(char,10);
        } else {
            break;
        }

        i++;
    }
    res = res * sign;
    let MAX_Value = Math.pow(2,31)-1;
    let MIN_Value = Math.pow(2,31)*-1;
    if(res > MAX_Value){
        return MAX_Value;
    } else if(res < MIN_Value){
        return MIN_Value;
    }
    return res;

};

function isDigit(char){
    return /^\d$/.test(char);
}
console.log(strToInt('       -42'))