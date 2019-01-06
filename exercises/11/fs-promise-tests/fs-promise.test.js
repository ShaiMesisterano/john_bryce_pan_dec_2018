const fsPromise = require('../__mocks/fs-promise');

function readTextFile(){
    return new Promise(async function(resolve, reject){
        const result = await fsPromise.readFile('1.txt');
        console.log("RESULT", result);
        resolve(result);
    });
}

test('suite1', async function(){
    expect(readTextFile()).resolves.toBe('hello');
});

test('suite2', async function(){
    expect(readTextFile()).resolves.toBe('blah');
});