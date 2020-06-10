Object.keys = function(obj){
    let results = [];
    let hasOwnProperty = Object.prototype.hasOwnProperty;
    for(let prop in obj){
        if(hasOwnProperty.call(obj,prop)){
            results.push(prop);
        }
    }
    return results;
}
/*

Chrome Opera 中使用 for-in 语句遍历对象属性时会遵循一个规律：
它们会先提取所有 key 的 parseFloat 值为非负整数的属性，
然后根据数字顺序对属性排序首先遍历出来，
然后按照对象定义的顺序遍历余下的所有属性。

*/