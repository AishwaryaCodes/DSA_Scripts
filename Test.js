class TreeNode {
    constructor(val) {
        this.data = val;
        this.left = null;
        this.right = null;
    }
}

function buildTree(nodes, index) {
    if (index >= nodes.length || nodes[index] === -1) return null;
    const node = new TreeNode(nodes[index]);
    node.left = buildTree(nodes, 2 * index + 1);
    node.right = buildTree(nodes, 2 * index + 2);
    return node;
}


function smallestAndLargestNodes(root) {
  if (!root) return [null, null];

  let min = root.data;
  let max = root.data; 
  
  function dfs(n) {
    if (!n) return;


 if(n.data !== null && n.data !== undefined) {
    min = Math.min(min, n.data);
    max = Math.max(max, n.data);

 }
    
    dfs(n.left);
    dfs(n.right);
  }

  dfs(root);
  return [min, max];
}

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let inputLines = [];

rl.on('line', function (line) {
    inputLines.push(line.trim());
    if (inputLines.length === 2) {
        const nodes = inputLines[1].split(' ').map(Number);
        const root = buildTree(nodes, 0);
        const [min, max] = smallestAndLargestNodes(root);
        console.log(min, max); // ✅ Correct output format
        rl.close();
    }
});

