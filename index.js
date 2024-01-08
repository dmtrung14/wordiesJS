const {
    repeat, trim, toUpperCase, toLowerCase, reverse, replace
} = require('./meaningless.js')

const what3word = require('./what3words.js')

const {
    expandAbbrev, 
    toInitial
} = require('./abbrev.js')

const {
    camelCase, capitalize, kebabCase, snakeCase, startCase
} = require('./lint.js')

const {randomWord, randomWords} = require('./random.js')

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