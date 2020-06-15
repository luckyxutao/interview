function getData() {
    let p = new Promise(function (resolve, reject) {
        setTimeout(function () {
            var num = Math.ceil(Math.random() * 20); //生成1-10的随机数
            console.log('随机数生成的值：', num)
            if (num <= 10) {
                console.log('符合条件，值为' + num)
                resolve(num);
            }
            else {
                reject('数字大于10了执行失败');
            }
        }, 2000);
    })
    return p
}
function myGetData(getData, times, delay) {
    return new Promise(function (resolve, reject) {
        function attempt() {
            getData().then(resolve, (err) => {
                if (times > 0) {
                    times--;
                    setTimeout(()=>{
                        attempt();
                    },delay);
                } else {
                    reject(err);
                }
            });
        }
        attempt();
    });
}

myGetData(getData, 1, 100)
