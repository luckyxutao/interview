const {Graph,convert_graph} = require('./Graph');
const data = require('./core.json');
const graph = {
    nodes:data.data.nodes,
    links:data.data.links
}
var g = new Graph();
g.setData(graph);

function dijkstra(g,startId){
    const distanceMap = {};
    const accessedSet = {};
    const prevs = {};
    let size = g.size();
    const {nodes} = g;
    for(let i = 1;i<size;i++){
        distanceMap[nodes[i].id] = Number.MAX_VALUE
    }
    accessedSet[startId] = true;
    for(let nId in g.adj[startId]){
        distanceMap[nId] = 1;
        prevs[nId] = [startId];
    }
    for(let i = 1;i<size;i++){
        let minDistanceFromStart = Number.MAX_VALUE;
        let minDistanceIndex = -1;
        for(let j= 1;j<size;j++){
            let curId = nodes[j].id;
            if(!accessedSet[curId] && (distanceMap[curId] < minDistanceFromStart)){
                minDistanceFromStart = distanceMap[curId];
                minDistanceIndex = curId;
            }
        }
        if(minDistanceIndex === -1){
            break;
        }
        accessedSet[minDistanceIndex] = true;
        for(let nId in g.adj[minDistanceIndex]){
            if(accessedSet[nId]){
                continue;
            }
            // let weight = g.adj[minDistanceIndex][nId];
            let weight =1;
            let preDistance = distanceMap[nId]
            if(weight !== Number.MAX_VALUE && (minDistanceFromStart+weight)<preDistance){
                distanceMap[nId] = minDistanceFromStart + weight;
                prevs[nId] = [minDistanceIndex];
            } else if(weight !== Number.MAX_VALUE && (minDistanceFromStart+weight)==preDistance){
                prevs[nId].push(minDistanceIndex)
            }
        }
    }
    return prevs;
}
// function printPath(nodes,prevs,nId,arr=[]){
//     if(!nId){
//         return;
//     }
//     if(nId){
//         printPath(nodes,prevs,prevs[nId],arr)
//     }
//     arr.push(nId);
// }
// console.time("共花费了");

const prevs = dijkstra(g,837094);
// console.log(prevs);
function printPath(nodes,prevs,nId){
    let res = [];
    dfsHelper(nodes,prevs,nId,[],res,nId);
    return res;
}

function dfsHelper(nodes,prevs,nId,path,res,fromId){
    if(!prevs[nId]){
        res.push([fromId,...path]);
        return;
    }
    let curArr = prevs[nId];
    for(let i = 0;i<curArr.length;i++){
        path.push(curArr[i]);
        dfsHelper(nodes,prevs,curArr[i],path,res,fromId);
        path.pop();
    }
}
function getPathLink(links,shortest_path){
    let res = {}
    shortest_path.reduce((prev,next)=>{
        res[`${prev}-${next}`] = 1;
        return next;
    });
    let linkIds = [];
    for(let i = 0;i<links.length;i++){
        let link = links[i];
        let key = `${link.source}-${link.target}`;
        let revertKey = `${link.target}-${link.source}`;
        if(res[key]|| res[revertKey]){
            linkIds.push(link.lid)
        }
    }
    return linkIds;
    // console.timeEnd("共花费了");

}
let shortest_path = printPath(g.nodes,prevs,597467);
// console.log(shortest_path);
let nodeIds = [];
let linkIds = [];
for(let i = 0;i<shortest_path.length;i++){
    let singlePathNodeIds = shortest_path[i];
    let singlePathLinkIds = getPathLink(graph.links,singlePathNodeIds);
    nodeIds.push(...singlePathNodeIds)
    linkIds.push(...singlePathLinkIds);
}
console.log();
// let shortest_path = [];
// console.timeEnd("共花费了");
// printPath(g.nodes,prevs,213896,shortest_path);
// console.log(shortest_path);
// if (shortest_path != null) {
//     let res = {}
//     let {links} = graph;
//     shortest_path.reduce((prev,next)=>{
//         res[`${prev}-${next}`] = 1;
//         return next;
//     });
//     let linkIds = [];
//     for(let i = 0;i<links.length;i++){
//         let link = links[i];
//         let key = `${link.source}-${link.target}`;
//         let revertKey = `${link.target}-${link.source}`;
//         if(res[key]|| res[revertKey]){
//             linkIds.push(link.lid)
//         }
//     }
//     console.log(linkIds);
//     // console.timeEnd("共花费了");

//   }
/*
Breast cancer
leve2 
共现次数>50
http://localhost:8080/graph/core/shortPath?graphId=75265&wordId=353758
[934137,353758]
"shortPaths": {
"nodes": [
189760,
934137,
353758
],
"links": [
1124378280,
1294330106
]
}

*/

// [1,2,3], [4,5,6] [7,8.9]
/*
147 148 149
157 158 159
167 168 169

24 25 26
34 35 36

*/