// Number of Provinces

function provincesCount (arr) {

    let n = arr.length; 

    let visited = Array(n).fill(false);

    let provinces = 0; 


    const dfs = (city) => {
        visited[city] = true;
        for(let neighbor = 0; neighbor < n; neighbor++) {
            if(arr[city][neighbor] === 1 && !visited[neighbor]) 
                dfs(neighbor);
        }
    };


    for(let i = 0; i < n; i++) {
        if(!visited[i]) {
            provinces++;
            dfs(i);
        }
    }

    return provinces;
}

isConnected = [[1,0,0],[0,1,0],[0,0,1]];

console.log(provincesCount(isConnected));