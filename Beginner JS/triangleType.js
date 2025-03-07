// Return the type of the Triangle. 
// if all 3 sides are equal - Equilateral
// 2 sides equal - Isosceles
// all not equal - Scalene

function triangleType(a, b, c) {

    if(a === b && b === c ) return "Equilateral";

    if(a === b || b === c || a === c) return "Isosceles";

    return "Scalene";

}

console.log(triangleType(3, 3, 3)); // Equilateral

console.log(triangleType(3, 4, 3)); // Isosceles

console.log(triangleType(5, 8, 6)); // Scalene