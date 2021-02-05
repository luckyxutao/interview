export default class Graph {
  constructor() {
    this.adj = {};
  }

  setData(links, nodes) {
    this.links = links;
    this.nodes = nodes;
    this.adj = this.buildAdjTable(nodes, links);
  }

  size() {
    return this.nodes.length;
  }

  buildAdjTable(nodes, links) {
    let j;
    let k;
    let l;
    let len;
    let len1;
    let n;
    const map = {};
    const ref = nodes;
    for (j = 0, len = ref.length; j < len; j++) {
      n = ref[j];
      for (k = 0, len1 = links.length; k < len1; k++) {
        l = links[k];
        if (n.id === l.source.id) {
          if (!(n.id in map)) {
            map[n.id] = {};
          }
          map[n.id][l.target.id] = l.count;
        }
        if (n.id === l.target.id) {
          if (!(n.id in map)) {
            map[n.id] = {};
          }
          map[n.id][l.source.id] = l.count;
        }
      }
    }
    return map;
  }
}
