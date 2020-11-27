/*

写一个 mySetInterVal(fn, a, b),每次间隔 a,a+b,a+2b,...,a+nb 的时间，然后写一个 myClear，停止上面的 mySetInterVal #7
*/
function mySetInterVal(fn, a, b) {
    this.times = 0;
    this.start = ()=>{
        this.timerId = setTimeout(()=>{
            fn();
            this.times++;
            this.start();
        },a+this.times*b);
    }
    this.stop = ()=>{
        this.times=0;
        clearTimeout(this.timerId)
    }
}
var a = new mySetInterVal(() => {console.log('123')},1000, 2000 );
a.start();
// a.stop();
