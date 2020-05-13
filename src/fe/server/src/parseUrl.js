// {
//     protocol: "http",
//     host: "www.xiyanghui.com",
//     path: "/product/list",
//     params: {
//         id: "12345",
//         sort: "discount"
//     },
//     hash: "title"
// }

function parseUrl(urlStr) {
    let obj = {
        params: {}
    };
    let [urlMain, queryStr, hash] = urlStr.split(/[#?]/);
    obj.hash = hash;
    //id=123456&sort=discount
    // 取参数方法1
    let queryReg = /([^=&]+)\=([^=&]+)/g;
    let queryResult;
    while(queryResult = queryReg.exec(queryStr)){
        obj.params[queryResult[1]] = queryResult[2];
    }
    //取参数方法1
    // queryStr.split(/&/).forEach(v => {
    //     let [key, value] = v.split(/\=/);
    //     obj.params[key] = value;
    // });

    //http://www.xiyanghui.com/product/list
    //取host时需要注意不能是贪婪匹配
    let urlReg = /^(https?)\:\/\/(.+?)(\/.+)/g;
    let results = urlReg.exec(urlMain);
    if (results) {
        obj.protocol = results[1] || '';
        obj.host = results[2] || '';
        obj.path = results[3] || '';
    }
    return obj;

}

var res = parseUrl("http://www.xiyanghui.com/product/list?id=123456&sort=discount#title");