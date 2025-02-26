// let & const keyword - Blocked Scope Variable

// let: can be re-assigned but not re-declared.
// const: cannot be re-assigned or re-declared. 

//let
let name = "aish";
name = "new_name"; // re-assigned is allowed. 
console.log(name);

//Const 
const age = 25;
age = 30; //Error: re-assigned is Not-allowed. 
console.log(age);