const dictionary3000 = require('./oxford3000.js')
const dictionary5000 = require('./oxford5000.js')

function randomWord(corpus=3000){
    if (corpus === 5000){
        var dictionary = dictionary5000;
    } else if (corpus === 3000) {
        var dictionary = dictionary3000;
    } else {
        throw new Error('corpus must be 3000 or 5000');
    }
    const index = Math.floor(Math.random() * dictionary.length);
    return dictionary[index];
}

function randomWords(n, corpus=3000){
    const words = [];
    for (let i=0; i<n; i++){
        words.push(randomWord(corpus));
    }
    return words;
}

module.exports = {
    randomWord, randomWords
}