const categorizedDictionary3000 = require('./data/oxford3000initial.json')
const categorizedDictionary5000 = require('./data/oxford5000initial.json')
const {capitalize} = require('./lint.js')

function expandAbbrev(string, corpus=3000){
    /* 
        expand abbrev to random full words from dictionary
        default corpus is Oxford 3000
        if corpus = 5000, use Oxford 5000
    */
    const words = string.split('');
    if (corpus === 5000){
        var dictionary = categorizedDictionary5000;
    } else if (corpus === 3000) {
        var dictionary = categorizedDictionary3000;
    } else {
        throw new Error('corpus must be 3000 or 5000');
    }
    const expanded = words.map(word => {
        const category = dictionary[word];
        const index = Math.floor(Math.random() * category.length);
        return capitalize(category[index]);
    }).join(' ');
    return expanded;
}

function toInitial(string){
    const words = string.split(' ');
    const abbrev = words.map(word => word.charAt(0)).join('').toUpperCase();
    return abbrev;
}


console.log(expandAbbrev('lol'))
console.log(toInitial('laugh out loud'))

module.exports = {
    expandAbbrev, toInitial
}