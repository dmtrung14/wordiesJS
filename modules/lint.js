function camelCase(string) {
    return string.replace(/(?:^\w|[A-Z]|\b\w)/g, function (letter, index) {
        return index == 0 ? letter.toLowerCase() : letter.toUpperCase();
    }).replace(/\s+/g, '');
}

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function kebabCase(string) {
    return string.replace(/([a-z])([A-Z])/g, '$1-$2').replace(/\s+/g, '-').toLowerCase();
}

function snakeCase(string) {
    return string.replace(/([a-z])([A-Z])/g, '$1_$2').replace(/\s+/g, '_').toLowerCase();
}

function startCase(string) {
    return string.replace(/([a-z])([A-Z])/g, '$1 $2').replace(/\s+/g, ' ').toLowerCase();
}


module.exports = {
    camelCase, capitalize, kebabCase, snakeCase, startCase
}

