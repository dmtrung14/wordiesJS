function what3word(lat, lng) {
    const url = `https://api.what3words.com/v3/convert-to-3wa?coordinates=${lat},${lng}&key=7XQ4J4QH`
    return fetch(url)
        .then(res => res.json())
        .then(data => data.words)
        .catch(err => console.log(err))
}