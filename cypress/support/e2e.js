// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:

import 'cypress-xpath'
import 'cypress-mochawesome-reporter/register';
import '@cypress-audit/lighthouse/commands';
// ignore all console errors in app
// eslint-disable-next-line no-unused-vars
Cypress.on('uncaught:exception', (err, runnable) => false)
