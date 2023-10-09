const request = require('supertest');
const baseUrl = require('../test/helpers/fixture.json').baseUrl;
let i, result = 0;

describe('GET entries', function () {
    it('Given that a payload and status 200 are returned, the objects with the Category property and total number of objects found will be printed on the screen', function () {
        request(baseUrl)
        .get('/entries')
        .expect(200)
        .end(function(err, res) {
            if (err) throw err;
            for(i=0; i <= res.body.count; i++) {
                if (res.body.entries[i]?.Category == 'Authentication & Authorization') {
                    result = result + 1;
                    console.log(res.body.entries[i])
                } else if (res.body.count == i) {
                    console.log('There are ' + result + ' positions with property Category: Authentication & Authorization in this body response\n')   
                }
            }
        })
    });
})