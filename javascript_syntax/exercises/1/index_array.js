var usersArr = [];

function addUser(firstName, lastName, age, height, hairColor, isActive, id) {
    usersArr.push(
    {
        firstName,
        lastName,
        age,
        height,
        hairColor,
        isActive,
        id
    }
    );
}

function modifyUserProperty(id, prop, value) {
    for (var i=0; i<usersArr.length; i++) {
        if (usersArr[i]["id"] === id) {
            usersArr[i][prop] = value;
        }
    }
}

function readUserProperty(id, prop) {
    for (var i=0; i<usersArr.length; i++) {
        if (usersArr[i]["id"] === id) {
            return usersArr[i][prop];
        }
    }
}

function removeUserProperty(id, prop) {
    for (var i=0; i<usersArr.length; i++) {
        if (usersArr[i]["id"] === id) {
            usersArr[i][prop] = null;
        }
    }
}

console.log(`Before all: ${JSON.stringify(usersArr, null, 4)}`);
addUser("Shai", "Mesisterano", 33, 187, null, true, 1);
console.log(`After adding a user: ${JSON.stringify(usersArr, null, 4)}`);
modifyUserProperty(1, "age", 34);
console.log(`After modifying: ${JSON.stringify(usersArr, null, 4)}`);
console.log(`Hair color is ${readUserProperty(1, "hairColor")}`);
removeUserProperty(1, "age");
console.log(`After removal: ${JSON.stringify(usersArr, null, 4)}`);