// ! Function Arguments: 'directory', 'name file.*, data'

const createFile = (directory, nameFile, data) => {
    const fs = require('fs');
    const path = require('path');

    const file = path.join(__dirname, directory, nameFile);

    fs.stat(file, err => {
        if (!err) throw new Error(err)
        fs.writeFile(file, data, err => {
            if (err) throw new Error(err)
            console.log(`Successfully: File "${nameFile}" created`)
        })
    })
}

module.exports = createFile