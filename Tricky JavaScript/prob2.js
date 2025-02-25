//What the code will print ?

function outer() {
    var x = 10;

    function inner() {
        console.log(x);
    }

    return inner;
}

var innerFunc = outer();

innerFunc();