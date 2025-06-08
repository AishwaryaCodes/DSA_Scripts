// K Closest Points to Origin

class MaxHeap {
    constructor() {
        this.heap = [];
    }


    push(point) {
        this.heap.push(point);
        this._heapifUp();
    }


    pop() {
        const top = this.heap[0];
        const last = this.heap.pop();

        if(this.heap.length > 0) {
            this.heap[0] = last;
            this._heapifyDown();
        }
        return top;
    }


    peek() {
        return this.heap[0];
    }


    size() {
        return this.heap.length;
    }


    _heapifUp() {
        let idx = this.heap.length - 1;
        while(idx > 0) {
            const parentIdx = Math.floor((idx - 1) / 2);
            if (this.heap[idx][0] <= this.heap[parentIdx][0]) break;
            [this.heap[idx], this.heap[parentIdx]] = [this.heap[parentIdx], this.heap[idx]];
            idx = parentIdx;
        }
    }
    

 _heapifyDown() {
        let idx = 0;
        const length = this.heap.length;
        while (true) {
            let largest = idx;
            const left = 2 * idx + 1;
            const right = 2 * idx + 2;
            if (left < length && this.heap[left][0] > this.heap[largest][0]) {
                largest = left;
            }
            if (right < length && this.heap[right][0] > this.heap[largest][0]) {
                largest = right;
            }
            if (largest === idx) break;
            [this.heap[idx], this.heap[largest]] = [this.heap[largest], this.heap[idx]];
            idx = largest;
        }
    }

}

// K Closest Points to Origin function
var kClosest = function(points, k) {
    const heap = new MaxHeap();

    for (const [x, y] of points) {
        const dist = x * x + y * y; // No need to sqrt
        heap.push([dist, [x, y]]);
        if (heap.size() > k) heap.pop(); // Maintain size k
    }

    return heap.heap.map(item => item[1]);
};