const dictionary = require('./data/oxford3000')


async function what3word(lat, lng) {
    /*
        A function that allows you to find the 3 words that describe a location. 
        Inpired by what3words.com, they don't share their API so this is a workaround.
    */
    
    const latIndex = Math.floor(Math.abs(lat * 100))
    const lngIndex = Math.floor(Math.abs(lng * 100))
    const latWord = dictionary[latIndex % dictionary.length]
    const lngWord = dictionary[lngIndex % dictionary.length]

    const height = await fetch(`https://api.open-elevation.com/api/v1/lookup?locations=${lat},${lng}`)
        .then(res => res.json())
        .then(data => data.results[0].elevation)

    const heightIndex = Math.floor(Math.abs(height) * 100)
    const heightWord = dictionary[heightIndex % dictionary.length]

    return latWord, lngWord, heightWord
}

module.exports = what3word
