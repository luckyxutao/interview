/* eslint-disable camelcase */
export function dijkstra(g, startId) {
  const distanceMap = {};
  const accessedSet = {};
  const prevs = {};
  const size = g.size();
  const { nodes } = g;
  for (let i = 1; i < size; i++) {
    distanceMap[nodes[i].id] = Number.MAX_VALUE;
  }
  accessedSet[startId] = true;
  if (!g.adj[startId]) {
    return {};
  }
  Object.keys(g.adj[startId]).forEach((nId) => {
    distanceMap[nId] = 1;
    prevs[nId] = [startId];
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
          prevs[nId] = [minDistanceIndex];
        } else if (weight !== Number.MAX_VALUE && minDistanceFromStart + weight === preDistance) {
          prevs[nId].push(minDistanceIndex);
        }
      }
    });
  }
  return prevs;
}
// export function printPath(nodes, prevs, nId, arr = []) {
//   if (!nId) {
//     return;
//   }
//   if (nId) {
//     printPath(nodes, prevs, prevs[nId], arr);
//   }
//   arr.push(nId);
// }
function dfsHelper(nodes, prevs, nId, path, res, fromId) {
  if (!prevs[nId]) {
    res.push([fromId, ...path]);
    return;
  }
  const curArr = prevs[nId];
  for (let i = 0; i < curArr.length; i++) {
    path.push(curArr[i]);
    dfsHelper(nodes, prevs, curArr[i], path, res, fromId);
    path.pop();
  }
}
function getPathLink(links, shortest_path) {
  const res = {};
  shortest_path.reduce((prev, next) => {
    res[`${prev}-${next}`] = 1;
    return next;
  });
  const linkIds = [];
  for (let i = 0; i < links.length; i++) {
    const link = links[i];
    const key = `${link.source.id}-${link.target.id}`;
    const revertKey = `${link.target.id}-${link.source.id}`;
    if (res[key] || res[revertKey]) {
      linkIds.push(link.lid);
    }
  }
  return linkIds;
}
function printMultiplePath(links, shortest_path) {
  const nodeIds = [];
  const linkIds = [];
  for (let i = 0; i < shortest_path.length; i++) {
    const singlePathNodeIds = shortest_path[i];
    const singlePathLinkIds = getPathLink(links, singlePathNodeIds);
    nodeIds.push(...singlePathNodeIds);
    linkIds.push(...singlePathLinkIds);
  }
  return {
    nodeIds,
    linkIds,
  };
}
export function printPath(nodes, links, prevs, nId) {
  const res = [];
  dfsHelper(nodes, prevs, nId, [], res, nId);
  return printMultiplePath(links, res);
  // return res;
}
