/**
 * @param {string} s
 * @return {string[]}
 */
var permutation = function (s) {
    var res = new Set();
    var path = [];
    var visited = [];
    dfsHelper([...s], path, res,visited);
    return Array.from(res);
};

function dfsHelper(arr,path,res,visited){
    if(path.length === arr.length){
        res.add(path.join(''))
        return;
    }

    for(let i = 0;i<arr.length;i++){
        if(visited[i]){
            continue;
        }
        visited[i] = true;
        path.push(arr[i]);
        dfsHelper(arr,path,res,visited);
        visited[i] = false;
        path.pop();
    }
}

console.log(permutation('aab'));