
const createDir = (directory, name) => {
    const fs = require('fs');
    const path = require('path');

    const concatDirName = `${directory}${name}/`

    const dir = path.join(__dirname, concatDirName);
    fs.stat(dir, err => {
        if (!err) throw new Error(err)
        fs.mkdir(
            dir,
            err => {
                if (err) throw new Error(err)
                console.log(`Successfully: Directory "${concatDirName}" created`)
            }
        )
    })
}

module.exports = createDir;