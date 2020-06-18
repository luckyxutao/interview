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


function objToList(obj) {
    let listLen = Object.keys(obj).length / 2;
    let id = 1;
    let head = {
        value: obj[`${id}_id`],
        label: obj[`${id}_class`],
        children: []
    }
    let cur = head;
    for (let i = id + 1; i <= listLen; i++) {
        let node = {
            value: obj[`${i}_id`],
            label: obj[`${i}_class`],
            children: []
        }
        cur.children.push(node);
        cur = node;
    }
    return head;
}

function mergeToTree(treeArr,linkedList){
    if(treeArr.length===0){
        treeArr.push(linkedList);
    } else {
        let target = treeArr.find((v)=>v.value === linkedList.value);
        if(!target){
            treeArr.push(linkedList);
        } else {
            let cur = *10target;
            let cur2 = linkedList;
            let prev = target;
            while(cur && cur2 &&  cur.value === cur2.value ){
                prev = cur;
                cur = cur.children[0];
                cur2 = cur2.children[0];
            }
            prev.children.push(cur2);
        }
    }
}

function arr2Tree(arr) {
    let tree = [];
    for (const obj of arr) {
        let linkedList = objToList(obj);
        mergeToTree(tree,linkedList);
    }
    return tree;
}
console.log(JSON.stringify(arr2Tree(oldArr)))


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