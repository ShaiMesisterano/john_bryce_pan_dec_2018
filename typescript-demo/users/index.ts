interface IUser {
    firstName: string;
    lastName: string;
    getFullName(): string;
}

abstract class User implements IUser {
    public firstName: string;
    public lastName: string;
    constructor(_firstName: string = "", _lastName: string = "") {
        this.firstName = _firstName;
        this.lastName = _lastName;
    }
    public getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
}

class ChatUser extends User {
    public nameToUpperCase(): string {
        return `${this.firstName} ${this.lastName}`.toUpperCase();
    }
}

let shai = new ChatUser("Joe", "Doe");
console.log(shai.getFullName());
console.log(shai.nameToUpperCase());