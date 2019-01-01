const fsPromise = require('./index');

test('Promise - file content', function(){
    fsPromise.readFile('./1.txt').then(function(content){
        expect(content).toBe('Hello World');
    })
});

test('async/await - file content - FAILING', async function(){
    const result = await fsPromise.readFile('./1.txt');
    expect(result).toBe('blah');
});

test('async/await - file content - SUCCESS', async function(){
    const result = await fsPromise.readFile('./1.txt');
    expect(result).toBe('Hello World');
});