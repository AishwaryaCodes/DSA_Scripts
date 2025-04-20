//  Can Place Flowers

function canPlace(flowerbed, n ) {

    for(let i = 0; i < flowerbed.length && n; i++) {
        if(flowerbed[i] === 0) {
            let left = (i === 0 || flowerbed[i - 1] === 0);
            let right = (i === flowerbed.length - 1 === 0 || flowerbed[i + 1] === 0);


            if(left && right) {
                flowerbed[i] = 1;
                n--;
            }
        }
    }

    return n === 0; 

};



let flowerbed = [1,0,0,0,1], n = 1;

console.log(canPlace(flowerbed, n ));