var jsdom = require('jsdom');

var { JSDOM } = jsdom;

function getFirstResult(body){
    var dom = new JSDOM(body);
    var firstResult = dom.window.document.querySelectorAll("#ires a")[0].href;
    return firstResult;
}

test('getFirstResult should return the URL', function () {
    expect(getFirstResult("")).toBe('blah');
});