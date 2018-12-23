class User {
    constructor(firstName, lastName, age, height, hairColor, isActive, id) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.height = height;
        this.hairColor = hairColor;
        this.isActive = isActive;
        this.id = id;
    }

    modify(prop, value) {
        this[prop] = value;
    }

    read(prop) {
        return this[prop];
    }

    remove(prop) {
        this[prop] = null;
    }
}

module.exports = User;