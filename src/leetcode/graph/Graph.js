class Graph{
    constructor(props){
        this.adj = {};
    }
    setData({links,nodes}){
        this.links  = links;
        this.nodes = nodes;
        this.adj = this.convert_graph(nodes,links)
    }
    size(){
        return this.nodes.length;
    }
     convert_graph(nodes,links) {
        var j, k, l, len, len1, map, n, ref, map = {},ref = nodes;
        // let links = links;
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
}


module.exports = {
    Graph
}