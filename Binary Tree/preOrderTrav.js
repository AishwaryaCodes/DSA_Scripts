// Binary Tree Preorder Traversal

function preOderTrav(root) {

    if(!root) return [];

    let result = [];
    let stack = [root];

    while(stack.length > 0) {
        let node  = stack.pop();
        result.push(node.val);


        if(node.right) stack.push(node.right);
        if(node.left) stack.push(node.left);
    }

    return result;

}

let root = [1,2,3,4,5,null,8,null,null,6,7,9];

console.log(preOderTrav(root)); 