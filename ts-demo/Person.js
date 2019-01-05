var Person = /** @class */ (function () {
    function Person() {
        this.age = 42;
    }
    Person.prototype.walk = function () {
        console.log('walking');
    };
    return Person;
}());
var person = new Person();
person.walk();
