var usersObj = {};

function addUser(firstName, lastName, age, height, hairColor, isActive, id) {
    usersObj[id] = {
        firstName,
        lastName,
        age,
        height,
        hairColor,
        isActive
    };
}

function modifyUserProperty(id, prop, value) {
    usersObj[id][prop] = value;
}

function readUserProperty(id, prop) {
    return usersObj[id][prop];
}

function removeUserProperty(id, prop) {
    usersObj[id][prop] = null;
}

console.log(`Before all: ${JSON.stringify(usersObj, null, 4)}`);
addUser("Shai", "Mesisterano", 33, 187, null, true, 1);
console.log(`After adding a user: ${JSON.stringify(usersObj, null, 4)}`);
modifyUserProperty(1, "age", 34);
console.log(`After modifying: ${JSON.stringify(usersObj, null, 4)}`);
console.log(`Hair color is ${readUserProperty(1, "hairColor")}`);
removeUserProperty(1, "age");
console.log(`After removal: ${JSON.stringify(usersObj, null, 4)}`);