const {Graph,convert_graph} = require('./dijkstra');
const data = require('./core.json');
const BreadthFirstPaths = require('./bfs')
const graph = {
    nodes:data.data.nodes,
    links:data.data.links
}
var g = new Graph();
g.setData(graph);
var bfs = new BreadthFirstPaths(233991);
bfs.bfs(g);
console.log(bfs.edgeTo);
const paths = bfs.pathTo(10675);
console.log(paths);
// console.log(g.adj);

// const map = convert_graph(graph);
// const lib_graph = new Graph(map);
// const a = graph.nodes[0];
// const b = graph.nodes[1]
// const shortest_path = lib_graph.findShortestPath(a.id, b.id);
// // console.log(shortest_path);

