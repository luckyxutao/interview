class BreadthFirstPaths{
    constructor(s){
        this.marked = {}
        this.edgeTo ={}
        this.s = s;
    }
      //和深搜相同
    hasPathTo(v){        //从起点开始能否到达顶点v
        return this.marked[v];
    }
    pathTo(v){
        if(!this.hasPathTo(v)){
            return null;
        }
        const path = [];//通过栈来储存路径
        const {s,edgeTo} = this;
        for (let x=v;x!=s;x=edgeTo[x]){         //因为edgeTo储存的是最后一个到的顶点，所以从v开始逆着找，直到找到起点s
            path.push(x);
        }
        path.push(s);
        return path;
    }
    bfs(graph){
        const {s} = this;
        const queue = [s];
        this.marked[s] = true;
        while(queue.length){
            const v = queue.pop();
            for(let w in graph.adj[v]){
                if(!this.marked[w]){
                    this.edgeTo[w] = v;
                    this.marked[w] = true;
                    queue.unshift(w);
                }
            }
        }
    }
}
//https://www.jianshu.com/p/e38ce26eb45e

module.exports =BreadthFirstPaths