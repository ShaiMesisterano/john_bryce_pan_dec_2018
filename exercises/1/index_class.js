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

var chatUser = new User("Shai", "Mesisterano", 33, 187, null, true, 1);
console.log(`After adding a user: ${JSON.stringify(chatUser, null, 4)}`);
chatUser.modify("age", 34);
console.log(`After modifying: ${JSON.stringify(chatUser, null, 4)}`);
console.log(`Hair color is ${chatUser.read("hairColor")}`);
chatUser.remove("age");
console.log(`After removal: ${JSON.stringify(chatUser, null, 4)}`);