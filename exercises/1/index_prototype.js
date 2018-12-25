//function User(firstName, lastName) {
//    this.firstName = firstName;
//    this.lastName = lastName;
//}

function User(firstName, lastName, age, height, hairColor, isActive, id) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.height = height;
    this.hairColor = hairColor;
    this.isActive = isActive;
    this.id = id;

    this.modify = function(prop, value){
        this[prop] = value;
    }

    this.read = function(prop) {
        return this[prop];
    }

    this.remove = function(prop) {
        this[prop] = null;
    }
}

//User.prototype.modify = function(prop, value) {
//    this[prop] = value;
//}
Array.prototype.filter = function(arr){
    var result = arr.filter(...);
    return result;
}

var chatUser = new User("Shai", "Mesisterano", 33, 187, null, true, 1);
//var chatUser = new User("Shai", "Mesisterano");

//console.log(chatUser instanceof User);

console.log(`After adding a user: ${JSON.stringify(chatUser, null, 4)}`);
chatUser.modify("age", 34);
console.log(`After modifying: ${JSON.stringify(chatUser, null, 4)}`);
console.log(`Hair color is ${chatUser.read("hairColor")}`);
chatUser.remove("age");
console.log(`After removal: ${JSON.stringify(chatUser, null, 4)}`);