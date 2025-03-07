// Generate Hashtags from the given String. - using Map, Replace, Split methods
// add # at the beginning, concate string and every first letter of word should be capital.

function generatehastags(str) {

    str = str.split(" ");

    str = str.map((ele) => 
        ele.replace(ele[0], ele[0].toUpperCase())
    );

    return str = `#${str.join("")}`;

}

console.log(generatehastags("aish web developer expert")); // #AishWebDeveloperExpert