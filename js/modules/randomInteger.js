
const randomInteger = (min, max) => {
    const generated = Math.floor(Math.random()*(max-min+1)+min);
    return generated;
}
module.exports = randomInteger;