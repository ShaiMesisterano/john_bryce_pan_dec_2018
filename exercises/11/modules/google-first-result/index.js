var jsdom = require('jsdom');
var { JSDOM } = jsdom;

async function start(rp, search){
    var googleResult = await rp(`http://www.google.com/search?q=${search}`);
    var firstResult = getFirstResult(googleResult);
    var content = await rp(`http://www.google.com/${firstResult}`);
    return content;
}

function getFirstResult(body){
    var dom = new JSDOM(body);
    var firstResult = dom.window.document.querySelectorAll("#ires a")[0].href;
    return firstResult;
}

module.exports = start;