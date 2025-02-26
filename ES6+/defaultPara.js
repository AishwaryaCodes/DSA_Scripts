//Default Parameters - provide default vaules for the functions parameters. 

const func = (name = "aish") => `Hello, ${name}!`;

console.log(func()); // Default name will get print. 

console.log(func("Bob"))