/**
 * Permanant redirect middleware for Rill.
 *
 * @param {String} to - where to redirect to.
 * @param {Number} [status=301] - Status code for redirect.
 * @return {Function}
 * @api public
 */
module.exports = function (to, status) {
	status = status || 301;
	return function redirect (ctx, next) {
		if (ctx.res.get("Location")) return next();
		ctx.res.redirect(to);
		ctx.res.status = status;
	}
};
