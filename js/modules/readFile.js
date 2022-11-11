const readFile = (directory, nameFile) => {
    const fs = require('fs');
    const path = require('path');
    const file = path.join(__dirname, directory, nameFile);

    fs.readFile(file, 'utf8', (err, data) => {
        if(err) throw new Error(err)
        console.log(`Successfully: File "${directory}${nameFile}" file read`)
        return data;
    })
}

module.exports = readFile;