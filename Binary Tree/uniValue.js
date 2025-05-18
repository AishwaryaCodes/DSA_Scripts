// Univalued Binary Tree

function univalue(root) {

   let target = root.val;

   function dfs(node) {
    if(!node) return true; 

    if(node.val !== target) return false;

    return dfs(node.left) && dfs(node.right);

   }

   return dfs(root);

};