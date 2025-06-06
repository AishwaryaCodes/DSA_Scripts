//  Binary Tree Level Order Traversal

function levelOrder(root) {

    if(!root) return [];

    const result = [], queue = [root];

    while(queue.length) {

        const level = [];

        const size = queue.length;

        for(let i = 0; i < size; i++) {
            const node = queue.shift();
            level.push(node.val);

            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }

        result.push(level);
    }
return result;

}