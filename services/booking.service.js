"use strict";
const MongooseAdapter = require("moleculer-db-adapter-mongoose");
const mongoose = require("mongoose");
const DbService = require("moleculer-db");

module.exports = {
    name: "booking",
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


        book: {
            params: {
                doctor: "string",
                date: "string"
            },
            async handler(ctx) {
               
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