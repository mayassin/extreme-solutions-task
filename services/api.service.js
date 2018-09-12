"use strict";

const ApiGateway = require("moleculer-web");

module.exports = {
	name: "api",
	mixins: [ApiGateway],

	// More info about settings: https://moleculer.services/docs/0.13/moleculer-web.html
	settings: {
		port: process.env.PORT || 3000,

		routes: [{
			path: "/api",
			onBeforeCall(ctx, route, req, res) {
				ctx.meta.token = req.headers.authorization;
			},
			whitelist: [
				// Access to any actions in all services under "/api" URL
				"**"
			],
			mergeParams: true,
			bodyParsers: {
				json: { limit: "50mb", extended: true },
				urlencoded: { limit: "50mb", extended: true }
			},
		}],

		// Serve assets from "public" folder
		assets: {
			folder: "public"
		}
	}
};
