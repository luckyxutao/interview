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
        prevs[nId] = startId;
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
                prevs[nId] = minDistanceIndex;
            }
        }
    }
    return prevs;
}
function printPath(nodes,prevs,nId){
    if(!nId){
        return;
    }
    if(nId){
        printPath(nodes,prevs,prevs[nId])
    }
    console.log(nId);
}
const prevs = dijkstra(g,934137);
printPath(g.nodes,prevs,291893)
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