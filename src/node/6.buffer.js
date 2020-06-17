const buf1 = Buffer.from('徐涛');
const buf2 = Buffer.from('架构');
const bigBuf = Buffer.alloc(12);
buf1.copy(bigBuf,0,0,6);
buf2.copy(bigBuf,6,0,11);
console.log(bigBuf.toString());
