enum ClothesSize {
    xs = "1",
    xl = "2",
    m = "3"
}
class Person {
    public age: number = 42;
    private firstName: string;
    public walk(): void {
        console.log('walking');
    }
    public talk(word = "Umm", feamale?: boolean): void {
        console.log(`${feamale ? 'Woman' : 'Man'} says ${word}`);
    }
    // custom getter
    public getFirstName(): string {
        return this.firstName;
    }
    cry() {
        console.log("Person is crying...");
    }
    // custom setter
    public setFirstName(firstName: string): string {
        if (!firstName) {
            console.log("Missing First Name");
            return;
        }
        this.firstName = firstName;
    }
    // native getter
    get _firstName(): string {
        return this.firstName;
    }
    // native setter
    set _firstName(firstName: string) {
        if (!firstName) {
            console.log("Missing First Name");
            return;
        }
        this.firstName = firstName;
    }
}

let person: Person = new Person();
// person.walk();
// console.log(person.age);
// person.talk();
// person.setFirstName("Menashe");
// const f = person.getFirstName();
// console.log(f);
// person._firstName = "Avi";
// console.log(person._firstName);

let companyArr: Array<Person> = [];
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

class Baby extends Person {
    public shirtSize: ClothesSize = ClothesSize.xs;
    cry(){
        console.log('Baby is crying...');
        // super.cry();
    }
}

let yuval = new Baby();
console.log(yuval.shirtSize);

interface IName {
    firstName: string,
    lastName: string
}

const nameCreator = (name: IName): string => `${name.firstName} ${name.lastName}`;
let myName = {firstName: "John", lastName: "Doe"};
console.log(nameCreator(myName));

// function nameCreator<T>(name: T): T {
//     return name;
// }
// let myName = nameCreator<string>("Shai");
// console.log(myName);