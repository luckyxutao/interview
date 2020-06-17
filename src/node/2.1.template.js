const path = require('path');
/*
    正则替换
    with
    newFunction
*/
const fs = require('fs')
function renderFile(filePath,obj,callback) {
    fs.readFile(filePath,'utf8',(err,html)=>{
        html = html.replace(/\{\{\s*([^{}]+?)\s*\}\}/g,(matched,g1)=>{
            return obj[g1]
        });
        callback(err,html)
    })
}


renderFile(path.resolve(__dirname, 'my-tmpl.html'), {
    name: 'zf',
    age: 11,
    arr: [1, 2, 3]
}, function (err, data) {

})