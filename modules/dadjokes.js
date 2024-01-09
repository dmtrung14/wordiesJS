async function lame() {
    const response = await fetch('https://icanhazdadjoke.com/', {
        headers: {
            Accept: 'application/json'
        }
    })
    const data = await response.json()
    return data.joke
}

async function dadJoke() {
    const joke = await lame()
    return joke
}

module.exports = dadJoke