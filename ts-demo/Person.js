var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var ClothesSize;
(function (ClothesSize) {
    ClothesSize["xs"] = "1";
    ClothesSize["xl"] = "2";
    ClothesSize["m"] = "3";
})(ClothesSize || (ClothesSize = {}));
var Person = /** @class */ (function () {
    function Person() {
        this.age = 42;
    }
    Person.prototype.walk = function () {
        console.log('walking');
    };
    Person.prototype.talk = function (word, feamale) {
        if (word === void 0) { word = "Umm"; }
        console.log((feamale ? 'Woman' : 'Man') + " says " + word);
    };
    // custom getter
    Person.prototype.getFirstName = function () {
        return this.firstName;
    };
    Person.prototype.cry = function () {
        console.log("Person is crying...");
    };
    // custom setter
    Person.prototype.setFirstName = function (firstName) {
        if (!firstName) {
            console.log("Missing First Name");
            return;
        }
        this.firstName = firstName;
    };
    Object.defineProperty(Person.prototype, "_firstName", {
        // native getter
        get: function () {
            return this.firstName;
        },
        // native setter
        set: function (firstName) {
            if (!firstName) {
                console.log("Missing First Name");
                return;
            }
            this.firstName = firstName;
        },
        enumerable: true,
        configurable: true
    });
    return Person;
}());
var person = new Person();
// person.walk();
// console.log(person.age);
// person.talk();
// person.setFirstName("Menashe");
// const f = person.getFirstName();
// console.log(f);
// person._firstName = "Avi";
// console.log(person._firstName);
var companyArr = [];
companyArr.push(person);
console.log(companyArr);
// let companyArr = new Array<Person>();
// companyArr.push(person);
// console.log(companyArr);
// let company = new Array<Person>(3);
// company.push(person);
// company.push(person);
// company.push(person);
// company.push(person);
// console.log(company);
var Baby = /** @class */ (function (_super) {
    __extends(Baby, _super);
    function Baby() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.shirtSize = ClothesSize.xs;
        return _this;
    }
    Baby.prototype.cry = function () {
        console.log('Baby is crying...');
        // super.cry();
    };
    return Baby;
}(Person));
var yuval = new Baby();
console.log(yuval.shirtSize);
var nameCreator = function (name) { return name.firstName + " " + name.lastName; };
var myName = { firstName: "John", lastName: "Doe" };
console.log(nameCreator(myName));
// function nameCreator<T>(name: T): T {
//     return name;
// }
// let myName = nameCreator<string>("Shai");
// console.log(myName);
