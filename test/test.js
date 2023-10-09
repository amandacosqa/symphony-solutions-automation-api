const request = require('supertest');
let i, result = 0;

describe('API testing', function () {
    it('Get entries', function () {
        request('https://api.publicapis.org')
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