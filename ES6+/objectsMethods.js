// Object Methods

// Object.entries()
// Object.key()
// Object.values()
// Object.aasign()


const user = {
    Username: "Aish",
    age: 29
};

console.log(Object.entries(user)); // Returns an array of [key, value] pairs from obejct. 
//[ [ 'Username', 'Aish' ], [ 'age', 29 ] ]


console.log(Object.assign(user)); // returns a copy of the user object.
// { Username: 'Aish', age: 29 }


console.log(Object.keys(user)); // Returns the Key's from obejct


console.log(Object.values(user)); // Returns the value's from obejct


