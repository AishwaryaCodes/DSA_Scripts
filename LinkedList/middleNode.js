// Middle Node of Linked List

function find(head) {

    let slow = head;

    let fast = head; 

    while(fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow;
}

let head = [1, 2, 3, 4, 5]; 

console.log(find(head));