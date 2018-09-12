"use strict";
const SqlAdapter = require("moleculer-db-adapter-sequelize");
const Sequelize = require("sequelize");
const DbService = require("moleculer-db");


module.exports = {
    name: "user",
    mixins: [DbService],
    adapter: new SqlAdapter(process.env.PGURI),
    model: {
        name: "user",
        define: {
            "email": { type: Sequelize.STRING, allowNull: false },
            "password": { type: Sequelize.STRING, allowNull: false },
            "type": {
                type: Sequelize.ENUM,
                values: ['doctor', 'patient', 'admin']
            },
            "profile": {
                type: Sequelize.STRING, allowNull: false
            }
        },
        options: {
            // Options from http://docs.sequelizejs.com/manual/tutorial/models-definition.html
        }
    },
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
        hello() {
            return "Hello Moleculer";
        },

		/**
		 * Welcome a username
		 *
		 * @param {String} name - User name
		 */
        welcome: {
            params: {
                name: "string"
            },
            handler(ctx) {
                return `Welcome, ${ctx.params.name}`;
            }
        }
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