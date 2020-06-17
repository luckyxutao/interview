var data=[
    { id: 40, parentId: 0, note: "一级菜单-1" }, 
    { id: 20, parentId: 0, note: "一级菜单-2" },
    { id: 22, parentId: 20, note: "二级菜单-22" },
    { id: 24, parentId: 22, note: "三级菜单-24" },
    { id: 34, parentId: 22, note: "三级菜单-34" }
];

function arr2Tree(arr){
    arr.forEach(item=>{
        let id = item.id;
        arr.forEach(item2=>{
            if(item2.parentId === id){
                if(!item.child){
                    item.child=[];
                }
                item.child.push(item2);
            }
        });
    });
    return data.filter(v=>v.parentId === 0);
}


console.log(JSON.stringify(arr2Tree(data)));
