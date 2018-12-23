var User = require('./User');
var Calc = require('./Calc');

// User Module
var chatUser = new User("Shai", "Mesisterano", 33, 187, null, true, 1);
console.log(`After adding a user: ${JSON.stringify(chatUser, null, 4)}`);
chatUser.modify("age", 34);
console.log(`After modifying: ${JSON.stringify(chatUser, null, 4)}`);
console.log(`Hair color is ${chatUser.read("hairColor")}`);
chatUser.remove("age");
console.log(`After removal: ${JSON.stringify(chatUser, null, 4)}`);

// Calc Module
console.log(`Executing module ${Calc.name}`);
console.log(Calc.sum(3,4));