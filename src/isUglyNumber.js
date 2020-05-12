/**
 * @param {number} num
 * @return {boolean}
 */
var isUgly = function(num) {
    if(num === 1){
        return true;
    }
    while(num % 2){
        num = Math.floor(num /2);
    }
    while(num % 3){
        num = Math.floor(num/3);
    }
    while(num %5){
        num = Math.floor(num / 5 );
    }
    return num === 1;


    var isUgly = function(num) {
        if(num==0) return false;
        if(num==1) return true;
        while(num%2==0)
        {
            num/=2;
        }
        while(num%3==0)
        {
            num/=3;
        }
        while(num%5==0)
        {
            num/=5;
        }
        return num==1;
    };


};

console.log(5);
