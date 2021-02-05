/* eslint-disable no-plusplus */
import Graph from '@/utils/graph/index';
import { dijkstra, printPath } from '@/utils/graph/dijkstra';
import types from './types';

const g = new Graph();
let prevs = {};
const gpId = 0;
function updateGraphPath(nodes, links) {
  g.setData(links, nodes);
  prevs = dijkstra(g, nodes[0].id);
}

function generatePath({ nodes, links }, newGraphId, fromId) {
  if (newGraphId !== gpId) {
    updateGraphPath(nodes, links);
  }
  const { linkIds, nodeIds } = printPath(nodes, links, prevs, fromId);
  // console.log(re);
  // if (shortestPath.length > 1) {
  //   const res = {};
  //   shortestPath.reduce((prev, next) => {
  //     res[`${prev}-${next}`] = 1;
  //     return next;
  //   });
  //   const linkIds = [];
  //   for (let i = 0; i < links.length; i++) {
  //     const link = links[i];
  //     const key = `${link.source.id}-${link.target.id}`;
  //     const revertKey = `${link.target.id}-${link.source.id}`;
  //     if (res[key] || res[revertKey]) {
  //       linkIds.push(link.lid);
  //     }
  //   }
  if (nodeIds.length === 0) {
    return null;
  }
  return {
    links: linkIds,
    nodes: nodeIds,
  };
}
