const readDataBaseWorking = (name) => {
    const readFile = require('./readFile');
    readFile(`../../data/people/workers/${name}/`, `${name}.json`);
}

module.exports = readDataBaseWorking;