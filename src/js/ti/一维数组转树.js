var data=[
    { id: 40, parentId: 0, note: "一级菜单-1" }, 
    { id: 20, parentId: 0, note: "一级菜单-2" },
    { id: 22, parentId: 20, note: "二级菜单-22" },
    { id: 24, parentId: 22, note: "三级菜单-24" },
    { id: 34, parentId: 22, note: "三级菜单-34" }
];

function arr2Tree(arr){
    if(!arr||!arr.length){
        return [];
    }
    let res = [];
    arr.forEach(element=>{
        let parentId = element.parentId;
        arr.forEach(ele2=>{
            if(ele2.id === parentId){
                if(!ele2.child){
                    ele2.child = [];
                }
                ele2.child.push(element);
            }
        });
    });
    return arr.filter(ele=>ele.parentId === 0)
}
console.log(JSON.stringify(arr2Tree(data)));