const Calc = require('./Calc');

describe('1 + 2 sum', function(){
    let sum;

    beforeAll(function(){
        sum = Calc.sum(1,2);
    });

    afterAll(function(){
        sum = null;
    });

    test('it should return a number', function(){
        expect(typeof sum).toBe('number');
    });

    test('it should return 3', function(){
        expect(sum).toBe(3);
    });
});