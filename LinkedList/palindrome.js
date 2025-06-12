// Palindrome Linked List

function checkPal(head) {

    if(!head || !head.next) return true;

    let slow = head;
    let fast = head;

    while(fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    let prev = null;

    while(slow) {
        let nextNode = slow.next;
        slow.next = prev;
        prev = slow;
        slow = nextNode;
    }

    let left = head;
    let right = prev;

    while(right){
        if(left.val !== right.val) return false;
        left = left.next;
        right = right.next;
    }

    return true;

}

let head = [1,2,2,1]; 

console.log(checkPal(head)); //true