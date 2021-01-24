const {Graph,convert_graph} = require('./dijkstra');
const data = require('./core.json');
// console.log(Graph);
const graph = {
    nodes:data.data.nodes,
    links:data.data.links
}
const map = convert_graph(graph);
const lib_graph = new Graph(map);
const a = graph.nodes[0];
const b = graph.nodes[1]
const shortest_path = lib_graph.findShortestPath(a.id, b.id);
console.log(shortest_path);

