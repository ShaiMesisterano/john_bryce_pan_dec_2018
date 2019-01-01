const Calc = require('./Calc');

test('1 + 2 = 3', function(){
    expect(Calc.sum(1,2)).toBe(3);
});

test('1 + 2 != 4', function(){
    expect(Calc.sum(1,2)).not.toBe(4);
})