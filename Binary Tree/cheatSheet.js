// Tree Interview Cheat Sheet (JS) — All-in-One File

// ----------------------------
// TreeNode Constructor
// ----------------------------
function TreeNode(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
}

// ----------------------------
// Convert Array to Binary Tree (Level-Order)
// ----------------------------
function arrayToTree(arr) {
    if (!arr.length) return null;

    const nodes = arr.map(val => val !== null ? new TreeNode(val) : null);

    for (let i = 0; i < arr.length; i++) {
        if (nodes[i] !== null) {
            const leftIdx = 2 * i + 1;
            const rightIdx = 2 * i + 2;

            if (leftIdx < arr.length) nodes[i].left = nodes[leftIdx];
            if (rightIdx < arr.length) nodes[i].right = nodes[rightIdx];
        }
    }

    return nodes[0]; // root
}

// ----------------------------
// Preorder Traversal: Root -> Left -> Right
// ----------------------------
function preOrder(root) {
    if (!root) return [];
    const result = [], stack = [root];

    while (stack.length) {
        const node = stack.pop();
        result.push(node.val);
        if (node.right) stack.push(node.right);
        if (node.left) stack.push(node.left);
    }

    return result;
}

// ----------------------------
// Inorder Traversal: Left -> Root -> Right
// ----------------------------
function inOrder(root) {
    const result = [], stack = [];
    let curr = root;

    while (curr || stack.length) {
        while (curr) {
            stack.push(curr);
            curr = curr.left;
        }
        curr = stack.pop();
        result.push(curr.val);
        curr = curr.right;
    }

    return result;
}

// ----------------------------
// Postorder Traversal: Left -> Right -> Root
// ----------------------------
function postOrder(root) {
    if (!root) return [];
    const result = [], stack = [root];

    while (stack.length) {
        const node = stack.pop();
        result.push(node.val);
        if (node.left) stack.push(node.left);
        if (node.right) stack.push(node.right);
    }

    return result.reverse();
}

// ----------------------------
// Level Order (BFS)
// ----------------------------
function levelOrder(root) {
    if (!root) return [];
    const result = [], queue = [root];

    while (queue.length) {
        const level = [];
        const size = queue.length;
        for (let i = 0; i < size; i++) {
            const node = queue.shift();
            level.push(node.val);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        result.push(level);
    }

    return result;
}

// ----------------------------
// Sample Test
// ----------------------------
const root = arrayToTree([1, 2, 3, null, 5]);
console.log("Preorder:", preOrder(root));     // [1, 2, 5, 3]
console.log("Inorder:", inOrder(root));       // [2, 5, 1, 3]
console.log("Postorder:", postOrder(root));   // [5, 2, 3, 1]
console.log("Level Order:", levelOrder(root));// [[1], [2, 3], [5]]
