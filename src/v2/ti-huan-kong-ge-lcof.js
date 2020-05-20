/**
 * @param {string} s
 * @return {string}
 */
var replaceSpace = function(s) {
    let i = 0;
    let char;
    let stringBuild = '';
    while(i<s.length){
        char = s.charAt(i);
        if(char == ' '){
            stringBuild += "%20"
        } else {
            stringBuild+=char;
        }
        i++;
    }
    return stringBuild;
};

console.log(replaceSpace("We are happy."))