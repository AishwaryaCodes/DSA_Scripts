// Remove Dublicates

function removeDublicates(str) {
    let unique = new Set(str);
    return Array.from(unique).join('');
}

console.log(removeDublicates("abababcdcdcd"));