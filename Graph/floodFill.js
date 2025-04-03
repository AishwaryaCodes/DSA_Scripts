// Flood Fill 

function floodFill (image, sc, sr, color) {

    let oGicolor = image[sr][sc];

    let n = image.length;
    let m = image[0].length;

    if(oGicolor === color) return image; 


    const dfs = (i, j) => {

        if(i < 0 || j < 0 || i >= n || j >= m || image[i][j] !== oGicolor) return; 

        image[i][j] = color; 

        dfs(i, j + 1);
        dfs(i, j - 1);
        dfs(i + 1, j);
        dfs(i -1, j);
    }

    dfs(sr, sc);

    return image; 

}

let image = [[1,1,1],[1,1,0],[1,0,1]], sr = 1, sc = 1, color = 2;

console.log(floodFill(image, sc, sr, color));