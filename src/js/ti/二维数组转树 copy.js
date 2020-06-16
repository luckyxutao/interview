
const grid = [
    ["a", "aa", "aaa", "aaaa"],
    ["b", "bb", "bbb"],
    ["a", "ab", "aba"],
    ["a", "aa", "aab"]
];
function arr2List(arr) {
    if (!arr || !arr.length) {
        return null;
    }

    let head = {
        name: arr[0],
        child: []
    };
    let cur = head;
    for (let i = 1; i < arr.length; i++) {
        let newNode = {
            name: arr[i],
            child: []
        };
        cur.child.push(newNode);
        cur = newNode;
    }
    return head;
}

// 链表项去重
function mergeTree(tree, list) {
    if (!tree) {
        return;
    }
    if (tree.length == 0) {
        return tree.push(list);
    }
    // ["a", "aa", "aaa", "aaaa"],
//     ["b", "bb", "bbb"],
//     ["a", "ab", "aba"],
//     ["a", "aa", "aab"]
    var head = list.name;

    tree.some(function (item) {
        if (item.name == head) {
            mergeTree(item.child, list.child[0]);
            return true;
        } else {
            tree.push(list);
        }
    });

}
function parseData(arr) {
    let rs = [];
    arr.forEach(row => {
        let temp = arr2List(row);
        mergeTree(rs, temp);
    });
    console.log(JSON.stringify(rs));

}

parseData(grid);
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


// // 数组转链表
// function array2list(arr) {
//     if (!arr.length) {
//         return null;
//     }

//     var node;
//     var head = {
//         name: arr[0],
//         child: []
//     }
//     var pnode = head;
//     for (var i = 1; i < arr.length; i++) {
//         node = {
//             name: arr[i],
//             child: []
//         };
//         pnode.child = [node];
//         pnode = node;
//     }
//     return head;
// }

// // 链表项去重
// function mergeTree(tree, list) {
//     if (!tree) {
//         return;
//     }
//     var head = list.name;
//     tree.some(function (item) {
//         if (item.name == head) {
//             mergeTree(item.child, list.child[0]);
//             return true;
//         } else {
//             tree.push(list);
//         }
//     });
//     if (tree.length == 0) {
//         tree.push(list);
//     }
// }

// // 二维数组转树结构
// function array2tree(data) {
//     var tree = [];
//     data.forEach(function (item, index) {
//         var tmp = array2list(item);
//         mergeTree(tree, tmp);
//     });
//     return tree;
// }

// array2tree(grid);
