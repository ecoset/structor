
const createDataBase = (directory, name, data) => {
    const createDir = require('./createDir.js');
    const createFile = require('./createFile.js');
    const convertToJSON = require('./convertToJSON.js');

    const dataJSON = convertToJSON(data);

    createDir(directory, name)
    createFile(`${directory}${name}/`, `${name}.json`, dataJSON);
}

module.exports = createDataBase;