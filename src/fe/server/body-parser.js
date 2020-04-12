const querystring = require("querystring");

module.exports = function bodyParser() {
    return async (ctx, next) => {
        // 获取请求数据的类型 json 或表单
        let contentType = ctx.get("Content-Type");
        if(['application/x-www-form-urlencoded','application/json'].includes(contentType)){
            await new Promise((resolve, reject) => {
                // 存储数据的数组
                let dataArr = [];
                // 接收数据
                ctx.req.on("data", chunk => dataArr.push(chunk));
                ctx.req.on("end",()=>{
                    // 获取数据 Buffer 格式
                    let data = Buffer.concat(dataArr).toString();
                    if (contentType === "application/x-www-form-urlencoded") {
                        // 如果是表单提交，则将查询字符串转换成对象赋值给 ctx.request.body
                        ctx.request.body = querystring.parse(data);
                    } else if (contentType === "application/json") {
                        // 如果是 json，则将字符串格式的对象转换成对象赋值给 ctx.request.body
                        ctx.request.body = JSON.parse(data);
                    }
                    resolve()
                })
            });
        }
        await next();
    }
}