
const crypto = require('crypto');
function maskBuffer(buffer,mask){

    //4个一组，遇到4则再从mask[0-4]开始异或
    for(let i = 0;i<buffer.length;i++){
        buffer[i] = buffer[i] ^ mask[i%4];
    }
    return buffer;
}

function getLength(buffer){
    const byte = buffer.readUInt8(0);
    const str = byte.toString(2);
    let length = parseInt(str.substring(1),2);
    //后边的两个字节才是真正在数据长度
    if(length === 126){
        //左边高位，右边低位
        //Number of bytes to skip before starting to read.
        length = buffer.readUInt16BE(1);
    } else if(length === 127){//后边的8个字节（64位)是真正的长度
        length = buffer.readBigUInt64BE(1);
    }
    return length;
}
function toAcceptKey(wsKey) {
    const CODE = '258EAFA5-E914-47DA-95CA-C5AB0DC85B11';
    return crypto.createHash('sha1').update(wsKey + CODE).digest('base64');;
}

function getHeaders(chunk){
    let arr = chunk.split(/\r\n/);
    let data = arr.slice(1,-2);
    let headers = {};
    for(const headStr of data){
        let reg = /([^:\s]+)\:\s+(.+)/g;
        let [matched,key,value] = reg.exec(headStr);
        headers[key] = value;
    }
    return headers;
}

module.exports = {
    getLength, maskBuffer,getHeaders,toAcceptKey
}