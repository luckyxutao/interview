function getAdj(nodes, links) {
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
  }
  
  function dijkstra(g, startId) {
    const distanceMap = {};
    const accessedSet = {};
    const prevs = {};
    const size = g.size();
    const { nodes } = g;
    for (let i = 1; i < size; i++) {
      distanceMap[nodes[i].id] = Number.MAX_VALUE;
    }
    accessedSet[startId] = true;
    Object.keys(g.adj[startId]).forEach((nId) => {
      distanceMap[nId] = 1;
      prevs[nId] = startId;
    });
    for (let i = 1; i < size; i++) {
      let minDistanceFromStart = Number.MAX_VALUE;
      let minDistanceIndex = -1;
      for (let j = 1; j < size; j++) {
        const curId = nodes[j].id;
        if (!accessedSet[curId] && distanceMap[curId] < minDistanceFromStart) {
          minDistanceFromStart = distanceMap[curId];
          minDistanceIndex = curId;
        }
      }
      if (minDistanceIndex === -1) {
        break;
      }
      accessedSet[minDistanceIndex] = true;
      Object.keys(g.adj[minDistanceIndex]).forEach((nId) => {
        if (!accessedSet[nId]) {
          const weight = 1;
          const preDistance = distanceMap[nId];
          if (weight !== Number.MAX_VALUE && minDistanceFromStart + weight < preDistance) {
            distanceMap[nId] = minDistanceFromStart + weight;
            prevs[nId] = minDistanceIndex;
          }
        }
      });
    }
    return prevs;
  }
  function printPath(nodes, prevs, nId, arr = []) {
    if (!nId) {
      return;
    }
    if (nId) {
      printPath(nodes, prevs, prevs[nId], arr);
    }
    arr.push(nId);
  }
  
module.exports = {
    printPath,
    dijkstra,
    getAdj
}