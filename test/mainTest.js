var URL      = require("url");
var assert   = require("assert");
var agent    = require("supertest");
var Rill     = require("rill");
var redirect = require("../");

describe("Rill/Redirect", function () {
	it("should set a local.", function (done) {
		var request = agent(
			Rill()
				.get("/from", redirect("/to", 302))
				.use(function (ctx) {
					assert.equal(ctx.res.status, 302);
					assert.equal(ctx.res.get("Location"), URL.resolve(ctx.req.href, "/to"));
				})
				.listen()
		);

		request
			.get("/from")
			.expect(302)
			.end(done)
	});
});

function respond (status, test) {
	return function (ctx) {
		ctx.res.status = status;
		if (typeof test === "function") test(ctx);
	};
}

function sleep (ms) {
	return new Promise(function (accept) {
		setTimeout(accept, ms);
	});
}