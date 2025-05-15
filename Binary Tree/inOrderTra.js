// Binary Tree Inorder Traversal

function inorder(arr) {

    let result = [];
    let stack = [];
    let curr = arr; 

    while(curr || stack.length) {
        while (curr) {
            stack.push(curr);
            curr = curr.left;
        }

        curr = stack.pop();
        result.push(curr.val);
        curr = curr.right;
    }

    return result;
};

let arr = [1,2,3,4,5,null,8,null,null,6,7,9];

console.log(inorder(arr));