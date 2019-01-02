const fsPromise = require('./index');

// Spy
// test('fs write file is executed', async function(){
//     const fsSpy = jest.spyOn(fs, 'writeFile');
//     const filename = '1.txt';
//     const content = 'Hello World';
//     await fsPromise.createFile(filename, content);
//     expect(fsSpy).toHaveBeenCalled();
// });

function readTextFile(){
    return new Promise(function(resolve, reject){
        const result = fsPromise.readFile('1.txt');
        resolve(result);
    });
}

// Mock
fsPromise.readFile = jest.fn(function(filename){
    return new Promise(function(resolve, reject){
        resolve('blah blah');
    });
});

test('fs read file execution', async function(){
    expect(readTextFile()).resolves.toBe('hello');
});

// Promise
// test('Promise - file content', function(){
//     fsPromise.readFile('./1.txt').then(function(content){
//         expect(content).toBe('Hello World');
//     })
// });

// async/await
// test('async/await - file content - FAILING', async function(){
//     const result = await fsPromise.readFile('./1.txt');
//     expect(result).toBe('blah');
// });

// test('async/await - file content - SUCCESS', async function(){
//     const result = await fsPromise.readFile('./1.txt');
//     expect(result).toBe('Hello World');
// });