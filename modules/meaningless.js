function repeat(string) {
    return string;
}

function trim(string) {
    return string.trim();
}

function toUpperCase(string) {
    return string.toUpperCase();
}

function toLowerCase(string) {
    return string.toLowerCase();
}

function reverse(string) {
    return string.split('').reverse().join('');
}

function replace(string, search, replace) {
    return string.replace(search, replace);
}



module.exports = {
    repeat, trim, toUpperCase, toLowerCase, reverse, replace
}