const {Graph,convert_graph} = require('./dijkstra');
const data = require('./core.json');
const convert_graph = function (graph) {
    var j, k, l, len, len1, map, n, ref;
    map = {};
    ref = graph.nodes;
    let links = graph.links;
    for (j = 0, len = ref.length; j < len; j++) {
        n = ref[j];
        for (k = 0, len1 = links.length; k < len1; k++) {
            l = links[k];
            if (n.id === l.source) {
                if (!(n.id in map)) {
                    map[n.id] = {};
                }
                map[n.id][l.target] = l.count;
            }
            if (n.id === l.target) {
                if (!(n.id in map)) {
                    map[n.id] = {};
                }
                map[n.id][l.source] = l.count;
            }
        }
    }
    return map;
};



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

