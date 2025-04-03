// Rotting Orange

function rottonOrange(grid) {
    
    let n = grid.length;
    let m = grid[0].length; 

    let fresh = 0; 

    let queue = []; 

    for(let i = 0; i < n; i++) {
        for(let j = 0; j < m; j++) {

            if(grid[i][j] === 2) queue.push([i, j]);

            else if (grid[i][j] === 1) fresh++;
            
        }
    }

    if(fresh === 0) return 0;

    let minute = 0;

    const direction = [[1,0], [-1, 0], [0, 1], [0, -1]];

    while(queue.length > 0) {
        let size = queue.length;
        let infected = false;

        for(let i = 0; i < size; i++) {
            const [x, y] = queue.shift();

            for(const [dx, dy] of direction) {
                const nx = x + dx; 
                const ny = y + dy;

                if(nx >= 0 && ny >= 0 && nx < m && ny < n && grid[nx][ny] === 1) {
                    grid[nx][ny] = 2;
                    queue.push([nx, ny]);
                    fresh--;
                    infected = true;
                }
            }
        }
        if(infected) minute++;
    }

    return fresh === 0 ? minute : -1;
}

grid = [[2,1,1],[1,1,0],[0,1,1]];

console.log(rottonOrange(grid));
