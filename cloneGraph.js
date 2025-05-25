// Clone Graph 

function Node(val, neighbour){
    this.val = val;
    this.neighbour = neighbour || [];
}

function cloneGra(node) {
    if(!node) return null;

    const visited = new Map();

    function dfs(curr) {
        if(visited.has(curr)) return visited.get(curr);

        const clone = new Node(curr.val);

        visited.set(curr, clone);


        for(let neig of curr.neighbour) {
            clone.neighbour.push(dfs(neig));
        }


        return clone;

    }

return dfs(node);

};