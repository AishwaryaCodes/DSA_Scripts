// Detect Cycles in 2D Grid 

function detectCycle (grid) {

    let n = grid.length;
    let m = grid[0].length; 

    let visited = Array.from({length:n}, () => Array(m).fill(false));

    let directions = [[1, 0], [-1,0], [0, 1], [0, -1]]; 

    const dfs = (x, y, fromX, fromY, char) => {
        if(visited[x][y]) return true;

        visited[x][y] = true;

        for(const[dx, dy] of directions) {
            const nx = x + dx;
            const ny = y + dy;

            if(nx < 0 || ny < 0 || nx >= n || ny >= m) continue;

            if(grid[nx][ny] !== char) continue;

            if (nx === fromX && ny === fromY) continue;

            if(dfs(nx, ny, x, y, char)) return true;

        }

        return false;
    }

   
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < m; j++) {
            if(!visited[i][j]) {
                if(dfs(i, j, -1, -1, grid[i][j])) {
                    return true;
                }
            }

        }
    }

   return false;
}

let grid = [["a","b","b"],["b","z","b"],["b","b","a"]]

console.log(detectCycle(grid));