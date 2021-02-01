const {Graph,convert_graph} = require('./dijkstra');
const data = require('./core.json');
const BreadthFirstPaths = require('./bfs')
const graph = {
    nodes:data.data.nodes,
    links:data.data.links
}
var g = new Graph();
g.setData(graph);

console.time("共花费了");

var bfs = new BreadthFirstPaths(312180);
bfs.bfs(g);
// console.log(bfs.edgeTo);
const shortest_path = bfs.pathTo(213896);
console.log(shortest_path);
if (shortest_path != null) {
    let res = {}
    let {links} = graph;
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
    console.log(linkIds);
    console.timeEnd("共花费了");

  }
// console.log(paths);
// console.log(g.adj);

// const map = convert_graph(graph);
// const lib_graph = new Graph(map);
// const a = graph.nodes[0];
// const b = graph.nodes[1]
// const shortest_path = lib_graph.findShortestPath(a.id, b.id);
// // console.log(shortest_path);

