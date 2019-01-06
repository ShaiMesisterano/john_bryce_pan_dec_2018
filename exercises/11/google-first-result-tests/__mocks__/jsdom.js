const jsdom = require('jsdom');
jest.genMockFromModule('jsdom');

jsdom.JSDOM = function () {
  return {
    window: {
      document: {
        querySelectorAll: function () {
          return [
            { href: "http://mock.com" }
          ]
        }
      }
    }
  }
};

module.exports = jsdom;