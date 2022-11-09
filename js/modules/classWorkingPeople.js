class Working {
    constructor(name, familyName, age, seriesNumber, passportCode, phone) {
        this.name = name;
        this.familyName = familyName;
        this.age = age
        this.password = {
            seriesNumber: seriesNumber,
            passportCode: passportCode,
        };
        this.phone = [`+7${phone}`];
        this.hoursWorked = 0;
    }
}

module.exports = Working;