var User = require('./User');

var user = new User("Shai", "Mesisterano", 33, 187, null, true, 1);

for (var prop in user) {
    console.log(`${prop}: ${user[prop]}`);
}

//user = null; removing the user

var result = user.remove("age");
//console.log(user.read("age"));

