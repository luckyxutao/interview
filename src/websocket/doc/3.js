
function maskBuffer(buffer,mask){

    //4个一组，遇到4则再从mask[0-4]开始异或
    for(let i = 0;i<buffer.length;i++){
        buffer[i] = buffer[i] ^ mask[i%4];
    }
    return buffer;
}
function unMaskBuffer(buffer,mask){

    //4个一组，遇到4则再从mask[0-4]开始异或
    for(let i = 0;i<buffer.length;i++){
        buffer[i] = buffer[i] ^ mask[i%4];
    }
    return buffer;
}
let mask = Buffer.from([1,0,1,0]);

let buffer = Buffer.from([0,1,0,1,0,1,0,1]);

const maskedBf = maskBuffer(buffer,mask);

const origin = unMaskBuffer(maskedBf,mask);
console.log(origin);

