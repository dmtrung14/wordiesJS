const {
    repeat, trim, toUpperCase, toLowerCase, reverse, replace
} = require('./modules/meaningless.js')

const what3word = require('./modules/what3words.js')

const {
    expandAbbrev, 
    toInitial
} = require('./modules/abbrev.js')

const {
    camelCase, capitalize, kebabCase, snakeCase, startCase
} = require('./modules/lint.js')

const {randomWord, randomWords} = require('./modules/random.js')

const {
    dadJoke
} = require('./dadJoke.js')

module.exports = {
    repeat, trim, toUpperCase, toLowerCase, reverse, replace,
    what3word,
    expandAbbrev, toInitial,
    camelCase, capitalize, kebabCase, snakeCase, startCase,    
    randomWord, randomWords,
    dadJoke  
}