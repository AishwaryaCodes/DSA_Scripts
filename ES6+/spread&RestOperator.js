// Spread and Rest Operator (...)

//Spread Operator - Expands elements.
//Rest Operator - Collects elements into an array. 

//Spread Operator in Array. 
const arr1 = [1, 2, 3]; 
const arr2 = [...arr1, 4, 5]; 
console.log(arr2);

//Spread Operator in Object. 
const obj1 = {
    a: 1,
    b: 2
};
const obj2 = {...obj1, c: 3};
console.log(obj2);


//Rest Operator 
const sum = (...numbers) => numbers.reduce((acc, num) => acc + num, 0);
console.log(sum(1, 2, 3, 4));

const sportsArr = ['baseball', 'football', 'chess', 'hockey', 'soccker', 'mountain climbing'];
const [first, seccond, ...rest] = sportsArr;

console.log(sportsArr);