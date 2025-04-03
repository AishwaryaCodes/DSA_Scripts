//  01 Matrix - Given an m x n binary matrix mat, return the distance of the nearest 0 for each cell.

function matrixNearestZero(grid) {

    let n = grid.length;
    let m = grid[0].length;

    let queue = [];

    let directions = [[1,0], [-1, 0], [0,1], [0, -1]];

    for(let i = 0; i < n; i++) { 
        for(let j = 0; j < m; j++) {

            if(grid[i][j] === 0) queue.push([i, j]);

            else grid[i][j] = Infinity;
        }
    }

    while(queue.length) {

        const[x, y] = queue.shift();

        for(const [dx, dy] of directions) {
            const nx = x + dx;
            const ny = y + dy;

            if(nx < 0 || ny < 0 || nx >= n || ny >= m) continue;

                 if(grid[nx][ny] > grid[x][y] + 1) {
                grid[nx][ny] = grid[x][y] + 1;
                queue.push([nx,ny]);
            }
        }
    }
    return grid;

}

let grid = [[0,0,0],[0,1,0],[1,1,1]]

console.log(matrixNearestZero(grid));

