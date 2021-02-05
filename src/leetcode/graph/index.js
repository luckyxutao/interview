const {getAdj} = require('./222.js');
const data = require('./bfs/core.json');
const graph = {
    nodes:data.data.nodes,
    links:data.data.links
}
const adv = getAdj(data.data.nodes,data.data.links);
console.log(adv);