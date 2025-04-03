// Number of Islands

function numIsland(grid) { 

    let n = grid.length; 
    let m = grid[0].length;
    let count = 0;

    if(!grid || n === 0) return 0;


    const dfs = (i, j) => {

        if(i < 0 || j < 0 || i >= n || j >= m || grid[i][j] === '0') return;

        grid[i][j] = '0';

        dfs(i + 1, j); //down 
        dfs(i - 1, j); //up
        dfs(i, j + 1); //right
        dfs(i, j - 1); //left
    };


    for(let i = 0; i < n; i++) {
        for(let j = 0; j < m; j++) {
            if(grid[i][j] === '1'){
                count++;
                dfs(i ,j);
            }
        }
    }

return count;
}


let grid = [
    ["1","1","0","0","0"],
    ["1","1","0","0","0"],
    ["0","0","1","0","0"],
    ["0","0","0","1","1"]
  ]

  console.log(numIsland(grid));
