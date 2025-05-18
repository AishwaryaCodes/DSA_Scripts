// Binary Tree Tilt

function tiltTree(root) { 

    let totalTilt = 0;

    function dfs(node) {

        if(!node) return 0; 

        let leftSum = dfs(node.left);
        let rightSum = dfs(node.right); 

        let tilt = Math.abs(leftSum - rightSum);
        totalTilt += tilt;

        return leftSum + rightSum + node.val;

    }

    dfs(root);

    return totalTilt;

}