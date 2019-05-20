const fetch = require('node-fetch');

fetch(`http://muslimsalat.com/jakarta/daily.json`)
.then(result => {
    return result.json();
})
.then(data => {
    const hsl = data.items[0];
    for (let [key, value] of Object.entries(hsl)) {
        console.log(`${key}: ${value}`);
    }
})