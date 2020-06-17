
const grid = [
    ["a", "aa", "aaa", "aaaa"],
    ["b", "bb", "bbb"],
    ["a", "ab", "aba"],
    ["a", "aa", "aab"]
];

function row2ToLinkedList(arr){
    if(!arr||!arr.length){
        return ;
    }
    let head = {
        "name": arr[0],
        "child": []
    };
    let cur = head;
    for(let i = 1;i<arr.length;i++){
        let newNode = {
            name : arr[i],
            child: []
        }
        cur.child.push(newNode);
        cur = newNode;
    }
    return head;
}

function mergeToTree(treeArr, linkedList){
    if(treeArr.length === 0){
        treeArr.push(linkedList);
    } else {
        let target = treeArr.find(v=>v.name === linkedList.name);
        if(!target){
            treeArr.push(linkedList);
        } else {
            let p1 = target;
            let p2 = linkedList;
            let prev = target;
            while(p1 && p2 && p1.name === p2.name){
                prev = p1;
                p1 = p1.child[0];
                p2 = p2.child[0];
            }
            prev.child.push(p2);
        }
    }
}

function parseData(arr) {
    if(!arr||!arr.length){
        return [];
    }
    let tree = [];
    for(const row of arr){
        let linkedList = row2ToLinkedList(row);
        mergeToTree(tree,linkedList )
    }
    return tree;
}

console.log(JSON.stringify(parseData(grid)))
// const res = [
//     {
//         "name": "a",
//         "child": [
//             {
//                 "name": "aa",
//                 "child": [
//                     {
//                         "name": "aaa",
//                         "child": [
//                             {
//                                 "name": "aaaa",
//                                 "child": []
//                             }
//                         ]
//                     },
//                     {
//                         "name": "aab",
//                         "child": []
//                     }
//                 ]

//             },
//             {
//                 "name": "ab",
//                 "child": [
//                     {
//                         "name": "aba",
//                         "child": []
//                     }
//                 ]

//             }
//         ]
//     },
//     {
//         "name": "b",
//         "child": [
//             {
//                 "name": "bb",
//                 "child": [
//                     {
//                         "name": "bbb",
//                         "child": []
//                     }
//                 ]
//             }
//         ]
//     }

// ]


// js实现深度复制
// 请用js实现将一个二维数组转换成树结构
// 例如：将下面数据[
//     ["a", "aa", "aaa", "aaaa"],
//     ["b", "bb", "bbb"],
//     ["a", "ab", "aba"],
//     ["a", "aa", "aab"]
// ] 转为：
// [
//     {
//         "name" : "a",
//         "child" : [
//             {
//                 "name" : "aa",
//                 "child" : [
//                     {
//                         "name" : "aaa",
//                         "child" : [
//                             {
//                                 "name" : "aaaa",
//                                 "child" : []
//                             }
//                         ]
//                     },
//                     {
//                         "name" : "aab",
//                         "child" : []
//                     }
//                 ]

//             },
//             {
//                 "name" : "ab",
//                 "child" : [
//                     {
//                         "name": "aba",
//                         "child" : []
//                     }
//                 ]

//             }
//         ]
//     },
//     {
//         "name": "b",
//         "child" : [
//             {
//                 "name" : "bb",
//                 "child" : [
//                     {
//                         "name" : "bbb",
//                         "child" : []
//                     }
//                 ]
//             }
//         ]
//     }

// ]

