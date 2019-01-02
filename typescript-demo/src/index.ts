// string
var color: string;
color = "Yellow";
console.log(color);
// number
var num: number;
num = 777;
console.log(num);
// boolean
var isActive: boolean;
isActive = true;
console.log(isActive);
// function -> void
function printAge(age: number) : void {
    console.log(age);
}
// function -> number
function getAge(age: number) : number{
    return age;
}
// class
class Person {
    private firstName: string = "";
    public age: number = 0;
    // constructor
    constructor(age: number) {
        this.age = age;
    }
    // void
    public walk(): void {
        console.log(`Walking...`);
    }
    // optional argument
    public talk(word = "Ummmm", female?: boolean): void {
        console.log(`${female ? 'Woman' : 'Man'} says ${word}`);
    }
    // setter
        public setFirstName(firstName: string): void {
            this.firstName = firstName;
        }
    // getter
    public getFirstName(): string {
        return this.firstName;
    }
    // set
    set _firstName(name: string) { // public by default
        if (name){
            this.firstName = name;
        }
        else {
            console.error("'First Name' must be a string");
        }
    }
    // get
    get _firstName(): string {
        return this.firstName;
    }
}
let shai:Person = new Person(14);
shai.age = 10;
console.log(shai.walk()); // void execution
console.log(shai.talk("Hello")); // optional argument execution
console.log(shai.talk("", true)); // default argument execution
shai.setFirstName("Aviad"); // setter
console.log(shai.getFirstName()); // getter
shai._firstName = "Ruti"; // set
console.log(shai._firstName);
// using static
class Train {
    private static seats = 200; // static variable
    public readonly model: string = "Mercedes"; // readonly variable
    constructor(model: string) {
        this.model = model; // assignment of a readonly variable
    }
    public static get seatsStatic(): number { // static get
        return Train.seats;
    }
    public static set seatsStatic(num) { // static set
        Train.seats = num;
    }
    public static start(): void { // static void
        Train.seatsStatic = 500; // setting static var
        console.log(`Train was started`);
    }
}
// Class reference
class TrainStation {
    public train: Train;
    constructor(train: Train) {
        this.train = train;
    }
    public print(): void {
        console.log(`Train station model is: ${this.train.model}`);
    }
}
let myTrain: Train = new Train("Mazda");
let myTrainStation: TrainStation = new TrainStation(myTrain);
myTrainStation.print();

// Fixed-size array of Trains
let trainsArr: Array<Train>;
let trains = new Array<Train>(2);
trains[0] = new Train("Audi");
trains[1] = new Train("Suzuki");

// class inheritence
class Baby extends Person {
    constructor(age: number) {
        super(age);
    }
    public crawl(): void {
        console.log(`${this.getFirstName()} is crawling...`);
    }
}
const imri = new Baby(3);
console.log(`Age is ${imri.age}`);
imri._firstName = "Imri";
imri.crawl();
//interface + abstract class
interface IPrint {
    x: number;
    y: number;
    color: string;
    fill(): void;
}
abstract class Computer implements IPrint {
    public x: number = 0;
    public y: number = 0;
    public color: string = 'black';
    public abstract fill(): void;
    public abstract turnOn(): void;
    public abstract turnOff(): void;
}
class Ipad extends Computer {
    public fill(): void {
        console.log(`filling ${this.x}/${this.y} with ${this.color}...`);
    }
    public turnOn(): void {
        console.log(`on...`);
    }
    public turnOff(): void {
        console.log(`off...`);
    }
}
const myIpad = new Ipad();
myIpad.x = 100;
myIpad.y = 200;
myIpad.fill();