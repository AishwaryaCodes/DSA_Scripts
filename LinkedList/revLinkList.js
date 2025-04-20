// Reverse LinkedList

function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
}

function rev(arr) {

    let prev = null; 
    let curr = arr;

    while(curr !== null) {
        let nextNode = curr.next; 
        curr.next = prev;
        prev = curr;
        curr = nextNode
    }

    return prev;

}

let arr = [1,2,3,4,5];

console.log(rev(arr));