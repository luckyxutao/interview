
function arrToTree(arr) {
    arr.forEach(element => {
        arr.forEach(child=>{
            if(child.parentId === element.id){
                if(!element.children){
                    element.children = [child]
                } else {
                    element.children.push(child);
                }
            }
        1});
    });
    return arr.filter(arr=>!arr.parentId);
}
function deepClone(obj){
    return JSON.parse(JSON.stringify(obj));
}
var data = [
    { id: 40, parentId: 34, note: "的萨达是40" },
    { id: 20, parentId: 12, note: "的萨达是20" },
    { id: 22, parentId: 20, note: "dsadas22" },
    { id: 12, parentId: null, note: "dsadasad萨达12" },
    { id: 24, parentId: 20, note: "搜索24" },
    { id: 34, parentId: 20, note: "搜索34" }
];
var res = arrToTree(data);
console.log(JSON.stringify(res))