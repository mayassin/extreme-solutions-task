"use strict";
const MongooseAdapter = require("moleculer-db-adapter-mongoose");
const mongoose = require("mongoose");
const DbService = require("moleculer-db");

module.exports = {
    name: "appointment",
    mixins: [DbService],
    adapter: new MongooseAdapter(process.env.MONGOURI),
    model: mongoose.model('appointment', mongoose.Schema({
        date: { type: Date, required: true },
        doctor: { type: mongoose.Schema.Types.ObjectId, ref: 'doctor', required: true },
        patient: { type: mongoose.Schema.Types.ObjectId, ref: 'patient', required: true }

    }), "appointment"),	/**
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