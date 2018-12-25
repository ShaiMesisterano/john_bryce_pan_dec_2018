// function print1(){
//     setTimeout(function(){
//         console.log("1");
//     }, 1000);
// }
// function print2(){
//     setTimeout(function(){
//         console.log("2");
//     }, 500);
// }
// function print3(){
//     setTimeout(function(){
//         console.log("3");
//     }, 2000);
// }

// print1();
// print2();
// print3();

function print1() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve("1");
        }, 1000);
    });
}
function print2() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve("2");
        }, 500);
    });
}
function print3() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve("3");
        }, 2000);
    });
}

print1().then(function(data1){
    console.log(data1);
    print2().then(function(data2){
        console.log(data2);
        print3().then(function(data3){
            console.log(data3);
        });
    });
})