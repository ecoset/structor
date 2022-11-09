const createNewWorking = (name, familyName, age, seriesNumber, passportCode, phone) => {
    const createDataBase = require('./createDataBase');
    const WorkingPeople = require('./classWorkingPeople');
    const rusToLat = require('./rusToLat');

    const dir = `../../data/people/workers/`;
    const newWorking = {};

    const nameLat = rusToLat(name).toLowerCase();
    const familyNameLat = rusToLat(familyName);
    const user = nameLat.concat(familyNameLat);

    newWorking[user] = new WorkingPeople(name, familyName, age, seriesNumber, passportCode, phone);

    createDataBase(dir, `${name} ${familyName}`, newWorking);
}
module.exports = createNewWorking;