const start = require('./index');

let html = "<html><body><div id='ires'><a href='http://abc.com'>Link</a></div></body></html>";

rp = jest.fn(function () {
    return html;
});

test('"start" should return the correct search result', async function () {
    const result = await start(rp, "sport");
    expect(result).toBe(html);
});