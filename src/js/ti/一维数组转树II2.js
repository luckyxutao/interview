//二维数组
let oldArr = [
    {
        '1_class': '工具',
        '2_class': '备忘录',
        '1_id': 1,
        '2_id': 2
    },
    {
        '1_class': '教育',
        '2_class': '学历教育',
        '3_class': '中等',
        '1_id': 3,
        '2_id': 4,
        '3_id': 6
    },
    {
        '1_class': '教育',
        '2_class': '学历教育',
        '3_class': '高等',
        '1_id': 3,
        '2_id': 4,
        '3_id': 5
    },
    {
        '1_class': '教育',
        '2_class': '成人教育',
        '1_id': 3,
        '2_id': 7
    }
];

console.log(JSON.stringify(getNewArr(oldArr)))

function convert2List(item){
    let listLen = Object.keys(item).length /2;
    if(listLen === 0){
        return null;
    }
    //       value: 1,
//       label: '工具',
//       children: [
    let head = {
        value : item[`${1}_id`],
        label : item[`${1}_class`],
        children: []
    };
    let cur = head;
    for(let i = 2;i<=listLen;i++){
        let newNode = {
            value : item[`${i}_id`],
            label : item[`${i}_class`],
            children: []
        }
        cur.children.push(newNode);
        cur = newNode;
    }
    return head;
}

function merge(res,linkedList){
    /*
    1. 先查找是否有
    */
   if(!res.length){
       res.push(linkedList);
   } else {
       let target = res.find(v=>v.value === linkedList.value);
       if(!target){
           res.push(linkedList);
       } else {
           let cur = target;
           let cur2 = linkedList;
           let prev = target;
           while(cur && cur2 && (cur.value === cur2.value)){
                prev = cur;
                cur = cur.children[0];
                cur2 = cur2.children[0];
           }
           prev.children.push(cur2);
       }
   }
}


function getNewArr(activeArr) {
    /*
    1. 将每条数据转为单链表
    2. 将链表合并到一起
    */
   let res = [];
   for(const item of activeArr){
       let list = convert2List(item);
        merge(res,list);
   }
   return res;
}




// let result = [
//     {
//       value: 1,
//       label: '工具',
//       children: [
//         {
//           value: 2,
//           label: '备忘录',
//           children: []
//         }
//       ]
//     },
//     {
//       value: 3,
//       label: '教育',
//       children: [
//         {
//           value: 4,
//           label: '学历教育',
//           children: [
//             {
//               value: 6,
//               label: '中等',
//               children: []
//             },
//             {
//               value: 5,
//               label: '高等',
//               children: []
//             }
//           ]
//         },
//         {
//           value: 7,
//           label: '成人教育',
//           children: []
//         }
//       ]
//     }
//   ];