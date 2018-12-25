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

async function print(){
    var data1 = await print1();
    console.log(data1);
    var data2 = await print2();
    console.log(data2);
    var data3 = await print3();
    console.log(data3);
}

print();