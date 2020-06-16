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

function objToList(obj) {
    var objLen = Object.keys(obj).length / 2; // 对象总共的层级
    if (objLen === 0) {
        return;
    }
    let id = 1;
    let head = {
        value: obj[`${id}_id`],
        label: obj[`${id}_class`],
        children: []
    };
    let prev = head;
    for (let i = id + 1; i <= objLen; i++) {
        let node = {
            value: obj[`${i}_id`],
            label: obj[`${i}_class`],
            children: []
        };
        prev.children.push(node);
        prev = node;
    }
    return head;
}

function mergeTree(res, obj) {
    if (res.length === 0) {
        res.push(obj);
        return;
    }
    let target = res.find(v => v.value === obj.value);
    if (!target) {
        res.push(obj);
    } else {
        let cur = target;
        let prev = target;
        while (cur && obj && cur.value === obj.value) {
            prev = cur;
            cur = cur.children[0];
            obj = obj.children[0];
        }
        prev.children.push(obj);
    }

}

function getNewArr(activeArr) {
    var res = [];
    for (let item of activeArr) {
        let temp = objToList(item);
        mergeTree(res, temp);
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