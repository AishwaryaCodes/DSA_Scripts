// Find the longest word using Reduce Method

function longestWord(str) {

    let word = str.split(" ");

    return word.reduce(
        (accum, curWord) => (curWord.length > accum.length ? curWord : accum),
        ""
    );
}

console.log(longestWord("Hello word, I am Aish, I am web developer "))