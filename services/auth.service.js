"use strict";

module.exports = {
    name: "auth",
	/**
	 * Service settings
	 */
    settings: {

    },

	/**
	 * Service dependencies
	 */
    dependencies: [],

	/**
	 * Actions
	 */
    actions: {

		/**
		 * Say a 'Hello'
		 *
		 * @returns
		 */
        signin: {
            params: {
                email: "string",
                password: "string"
            },
            async handler(ctx) {
              

                return `Welcome, ${ctx.params.name}`;
            }
        },


        signup: {
            params: {
                name: "string",
                email: "string",
                password: "string",
                type: "string",
            },
            async handler(ctx) {
             
                return `Welcome, ${ctx.params.name}`;
            }
        },

    },

	/**
	 * Events
	 */
    events: {

    },

	/**
	 * Methods
	 */
    methods: {

    },

	/**
	 * Service created lifecycle event handler
	 */
    created() {

    },

	/**
	 * Service started lifecycle event handler
	 */
    started() {

    },

	/**
	 * Service stopped lifecycle event handler
	 */
    stopped() {

    }
};