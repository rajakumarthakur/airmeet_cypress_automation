/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */
module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
}
/*
module.exports = (on, config) => {

    console.log(config) // see what all is in here!

    // modify config values
    config.defaultCommandTimeout = 10000
    //config.baseUrl = 'https://demo.airmeet.com'

    // modify env var value
    config.env.url = 'https://demo.airmeet.com'
    config.env.edit_airmeet = 'https://demo2.airmeet.com'

    // return config
    return config
}*/
