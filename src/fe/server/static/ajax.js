
function AjaxRequest(options) {
    var method = options.method || 'GET';
    var async = typeof options.async !== 'undefined' ? options.async : true;
    var success = options.success;
    var headers = options.headers || {};
    var url = options.url;
    var data = options.data;
    var METHOD_GET = method.toLowerCase() === 'method';
    //创建对象
    let xhr;
    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
    } else {
        xhr = ActiveXObject('Microsoft.XMLHttp');
    }

    //监听状态变化
    // 0 未调用send发方法
    // uninitialized - 还未开始载入
    // loading - 载入中
    // interactive - 已加载，文档与用户可以开始交互
    // complete - 载入完成
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            success && success(xhr.responseText);
        }
    }

    //打开链接
    xhr.open(method, url, async);
    //设置headers
    Object.keys(headers).forEach(key => {
        xhr.setRequestHeader(key, headers[key]);
    })
    //发送请求
    METHOD_GET ? xhr.send() : xhr.send(data);

}
// //get请求
// var getTest = new AjaxRequest({
//     url: '/get/1?a=1&b=2&u=5'
// });

//post请求x-www/
var postTest = new AjaxRequest({
    url: '/post/1',
    method:'post',
    headers:{
        'Content-type':'application/x-www-form-urlencoded'
    },
    data : 'a=1&b=2&f=5'
});

// //post请求withJSON
// var postTest = new AjaxRequest({
//     url: '/post/1',
//     method:'post',
//     headers:{
//         'Content-type':'application/json'
//     },
//     data : JSON.stringify({
//         a:1,
//         b : 2,
//         c:3
//     })
// });

