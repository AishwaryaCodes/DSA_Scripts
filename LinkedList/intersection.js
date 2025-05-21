// Intersection of 2 Linked List

function ListNode(val) {
      this.val = val;
      this.next = null;
  }

function inter(list1, list2) {

    if(!list1 || !list2) return null;

    let a = list1;
    let b = list2;

    while(a !== b) {
        a = a ? a.next : list2;
        b = b ? b.next : list1;
    }

    return a;

};

let list1 = [1,9,1,2,4];
let list2 = [3,2,4];

console.log(inter(list1, list2));