// let buffer = Buffer.from([0b00000001,0b00000000]);

//大端,左边高位，右边低位
//0b00000001 0b00000000
// console.log(buffer.readUInt16BE(0));
// //小端
// //右边高位，左边低位 00000000 00000001
// console.log(buffer.readUInt16LE(0));

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
// console.log(getLength(Buffer.from([0b11111111,0b0000000,0b0000000,0b0000000,0b0000000,0b0000000,0b0000000,0b00000001,0b00000001])));

let mask = Buffer.from([1,0,1,0]);

let buffer = Buffer.from([0,1,0,1,0,1,0,1]);

