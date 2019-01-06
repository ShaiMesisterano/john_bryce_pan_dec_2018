const request = require('request-promise');
const index = require('../index');

describe('Test the root path', () => {
    test('It should response the GET method', async () => {
        const options = {
            uri: 'http://localhost:3000',
            resolveWithFullResponse: true
        };
        const response = await request(options);
        console.log(response.statusCode);
        expect(response.statusCode).toBe(200);
    });
})