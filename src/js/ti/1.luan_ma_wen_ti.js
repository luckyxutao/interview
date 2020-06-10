// 用正则表达式来将字符串"I? love ?? the ?great ? ?wall in ?beijing"更改为:"I love the Great Wall in Beijing",主要是为了解决编码的问题导致的问题,规律:

// 1,乱码只有两种特殊字符分别是'?'和' ';

// 2,如果乱码的末尾是'?'则它的下一位字母肯定是大写;


function replace(s){
    let reg = /([\?\s]+)(\w)/g;
    s = s.replace(reg,(matched,g1,g2)=>{
        if(/\?$/.test(g1)){
            return ' ' + g2.toUpperCase();
        } else {
            return ' ' + g2;
        }
    });
    return s;    
}