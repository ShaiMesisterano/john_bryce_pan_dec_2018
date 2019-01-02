console.log(x);
var x = 2;

foo();
function foo(){
    console.log('foo');
}
var foo = function(){
    console.log('foo');
}
//let
console.log(x);
let x = 2;

//const
const x = 2;
console.log(x);
x = 3;
console.log(x);
const arr = [1,3,7];
console.log(arr);
arr.push(99);
console.log(arr);

function foo(){
    console.log(foo);
}

// arrow function
const foo = () => 42;
const foo = (num, multiplier) => {
    return num * multiplier;
}
const foo = num => {
    return num;
}
const foo = (num = 99, multiplier = 2) => {
    const obj = {
        name: "Shai",
        height: 188
    }
    const arr = [1, 3, 7, 9, 10,11];
    const result = [...arr];
    console.log(result);
    // console.log('ok');
    return num * multiplier;
}
foo();
console.log(foo());
// call/apply
const obj = {
    name: "Shai",
    age: 33
}

const obj2 = {
    name: "David",
    age: 22
}

function printAge(multiplier, message) {
    console.log(message + this.age);
}
// call
printAge.call(obj2, 3, "Number is:");
// apply
var arr = [3, "Number is: "];
printAge.apply(obj2, arr);
//bind
var _printAge = printAge.bind(obj, 3, "Number is: ");
_printAge();