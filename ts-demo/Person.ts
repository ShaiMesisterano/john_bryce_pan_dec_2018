class Person {
    public age: number = 42;
    public walk(): void {
        console.log('walking');
    }
}

let person: Person = new Person();
person.walk();
console.log(person.age);