### react工作原理
* JSX编译成VDOM
* mounting阶段
从根组件开始渲染VDOM，深度优先遍历生成一颗虚拟DOM树currentTree
* 更新阶段
setState或props变化后，生成新Tree
* 重新渲染
    1. 协调阶段，对比两颗tree找到差异并生成effectlist
    2. commit阶段,将effectlist执行，操作dom