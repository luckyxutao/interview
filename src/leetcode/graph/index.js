const {Graph,convert_graph} = require('./Graph');
const data = require('./core.json');
const graph = {
    nodes:data.data.nodes,
    links:data.data.links
}
var g = new Graph();
g.setData(graph);

function dijkstra(g,startId){
    const distanceMap = new Map();
    const accessedSet = new Set();
    let size = g.size();
    const {nodes} = g;
     for(let i = 1;i<size;i++){
        distanceMap.set(nodes[i].id+'',Number.MAX_VALUE);
    }
    accessedSet.add(startId);
    for(let nId in g.adj[startId]){
        distanceMap.set(nId,1);
    }
    for(let i = 1;i<size;i++){
        let minDistanceFromStart = Number.MAX_VALUE;
        let minDistanceIndex = -1;
        for(let j= 1;j<size;j++){
            let curId = nodes[j].id+'';
            if(!accessedSet.has(curId) && (distanceMap.get(curId) < minDistanceFromStart)){
                minDistanceFromStart = distanceMap.get(curId);
                minDistanceIndex = curId;
            }
        }
        if(minDistanceIndex === -1){
            break;
        }
        accessedSet.add(minDistanceIndex);
        for(let nId in g.adj[minDistanceIndex]){
            if(accessedSet.has(nId)){
                continue;
            }
            let weight = g.adj[minDistanceIndex][nId];
            let preDistance = distanceMap.get(nId);
            if(weight !== Number.MAX_VALUE && (minDistanceFromStart+weight)<preDistance){
                distanceMap.set(nId,minDistanceFromStart + weight)
            }
        }
    }
    return distanceMap;
}

dijkstra(g,837094+'');

//http://localhost:8080/graph/core/shortPath?graphId=36256&wordId=621800
/*

"shortPaths": {
"nodes": [
621800,
837094,
633750
],
"links": [
733880559,
97186613
]
}

*/

// console.time("共花费了");

// var bfs = new BreadthFirstPaths(312180);
// bfs.bfs(g);
// // console.log(bfs.edgeTo);
// const shortest_path = bfs.pathTo(213896);
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
//     console.timeEnd("共花费了");

//   }
// console.log(paths);
// console.log(g.adj);

// const map = convert_graph(graph);
// const lib_graph = new Graph(map);
// const a = graph.nodes[0];
// const b = graph.nodes[1]
// const shortest_path = lib_graph.findShortestPath(a.id, b.id);
// // console.log(shortest_path);

