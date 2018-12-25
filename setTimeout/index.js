for (var i = 1; i <= 10000; i++) {
    console.log("1");
    setTimeout(function () {
        console.log("2");
    }, 0);
    console.log("3");
}
for (var i = 1; i <= 100; i++) {
    console.log("4");
}