// Generate Hashtags from the given String.  - using charAt, Slice, Split
// add # at the beginning, concate string and every first letter of word should be capital.

function generatehastags(str) { 

str = str.split(" ");

str = str.map((ele) => 
    (ele.charAt(0).toUpperCase() + ele.slice(1))
);

return str = `#${str.join("")}`;

}

console.log(generatehastags("aish web developer expert")); // #AishWebDeveloperExpert