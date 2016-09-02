'use strict'

var URL = require('url')
var assert = require('assert')
var agent = require('supertest')
var Rill = require('rill')
var redirect = require('../')

describe('Rill/Redirect', function () {
  it('should redirect request.', function (done) {
    var request = agent(
      Rill()
        .get('/from', redirect('/to', 302))
        .use(function (ctx) {
          assert.equal(ctx.res.status, 302)
          assert.equal(ctx.res.get('Location'), URL.resolve(ctx.req.href, '/to'))
        })
        .listen()
    )

    request
      .get('/from')
      .expect(302)
      .end(done)
  })
})
