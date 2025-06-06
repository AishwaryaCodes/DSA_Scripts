// Course Schedule

function canFinish(numCource, prerequisit) {

    const inDeg = new Array(numCource).fill(0);
    const graph = new Map();

    for(const [course, prereq] of prerequisit) {
        inDeg[course]++;
        if(!graph.has(prereq)) graph.set(prereq, []);
        graph.get(prereq).push(course);
    }

    const queue = [];

    for(let i = 0; i < numCource; i++) {
        if(inDeg[i] === 0) queue.push(i);
    }

    let count = 0;

    while(queue.length > 0) {
        const course = queue.shift();
        count++;

        if(graph.has(course)) {
            for(const neig of graph.get(course)) {
                inDeg[neig]--;

                if(inDeg[neig] === 0) queue.push(neig);
            }
        }
    }

    return count === numCource;
}