
const readFile = (directory, familyName) => {
    const fs = require('fs');

    const file = fs.readFileSync(`${directory}${familyName}`, 'utf8', (err, data) => {
        if(err) throw new Error(err)
        return data
    })
    const parseData = JSON.parse(file);
    console.log(parseData);
}

module.exports = readFile;