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
var User = /** @class */ (function () {
    function User(_firstName, _lastName) {
        if (_firstName === void 0) { _firstName = ""; }
        if (_lastName === void 0) { _lastName = ""; }
        this.firstName = _firstName;
        this.lastName = _lastName;
    }
    User.prototype.getFullName = function () {
        return this.firstName + " " + this.lastName;
    };
    return User;
}());
var ChatUser = /** @class */ (function (_super) {
    __extends(ChatUser, _super);
    function ChatUser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ChatUser.prototype.nameToUpperCase = function () {
        return (this.firstName + " " + this.lastName).toUpperCase();
    };
    return ChatUser;
}(User));
var shai = new ChatUser("Joe", "Doe");
console.log(shai.getFullName());
console.log(shai.nameToUpperCase());
