// Variables
var str = " 'World'"; // hello where
var num = 2;
var strNum = "4";
var num2 = 6;
var strNum2 = "6";
var strNum3 = "2";
// Conditions
if (num === num2 && num > 0) {
    console.log(`num is smaller than num2 and greater than zero`);
}
if (num === strNum3){ // or num == strNum3 (checks only value)
    console.log(`num is equal to strNum3`);
}
// Object
var obj = {};
var watermelonObj = {
    color: "red",
    name: "watermelon",
    weight: 10
};
var key = "color";
watermelonObj.isWithSeeds = true; // watermelonObj[key] = true;
console.log(watermelonObj[key]);
// Array
var arr = [];
arr = ['Lena',42,null,num];
var und; // und is undefined
var bool = true;
var n = null;
/*
multi
line
comment
*/
console.log(`Hello ${str}`);
console.log(typeof bool);
// Functions
function foo() {
    console.log(`Hello from foo`);
}
foo();
var foo = function(name) {
    //    console.log(`Hello from ${nale}`); // Error
    console.log(`Hello from ${name}`);
}
foo("foo");
// For-Loop
var arr = ["Lemon", "Apple", "Orange"];
for (var i=0;i<arr;i++){
    console.log(arr[i]);
}