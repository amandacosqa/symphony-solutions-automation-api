var expect = require('chai').expect;
const request = require('supertest');
// const { schema } = require('../../schemas/posts.js');
// const baseUrl = require('../../helper/baseUrl');

describe('API testing', function () {
    it('Get entries', function () {
        request('https://api.publicapis.org/entries')
        .get('/')
        .end(function(res) {
            // expect(res.status).to.be.equal(204);
            expect(res.body.count).to.be.equal(147)
        });
        // .expect(203)
        // .expect((res) => {
        //     assert.ok(res.body.count(147));
        // })
    })
  })