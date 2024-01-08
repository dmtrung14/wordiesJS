const dictionary3000 = require('./oxford3000.js')
const dictionary5000 = require('./oxford5000.js')
const fs = require('fs')

const dictionaries = [dictionary3000, dictionary5000]

dictionaries.forEach(dictionary => {
    const object = {}
    dictionary.forEach(word => {
        word = word.toLowerCase()
        const initial = word[0]
        if (!object[initial]) {
            object[initial] = []
        }
        object[initial].push(word)
    })
    if (dictionary.length < 4000) {
        fs.writeFileSync('./data/oxford3000initial.json', JSON.stringify(object, null, 4))
    } else {
        fs.writeFileSync('./data/oxford5000initial.json', JSON.stringify(object, null, 4))
    }
})



