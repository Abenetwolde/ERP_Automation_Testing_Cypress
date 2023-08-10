// // cypress/e2e/login/login.cy.js
const { Given, When, Then } = require('cypress-cucumber-preprocessor/steps');


// describe('Login Test', () => {
//   const url = 'https://example.com/login';

//   it('should allow a user to log in with valid credentials', () => {
//     Given('I am on the login page', () => {
//       cy.visit(url);
//     });

//     When('I enter valid credentials', () => {
//       cy.get('#username').type('valid-username');
//       cy.get('#password').type('valid-password');
//       cy.get('#login-button').click();
//     });

//     Then('I should be redirected to the dashboard page', () => {
//       cy.url().should('include', '/dashboard');
//     });
//   });

//   it('should show an error message when a user tries to log in with invalid credentials', () => {
//     Given('I am on the login page', () => {
//       cy.visit(url);
//     });

//     When('I enter invalid credentials', () => {
//       cy.get('#username').type('invalid-username');
//       cy.get('#password').type('invalid-password');
//       cy.get('#login-button').click();
//     });

//     Then('I should see an error message', () => {
//       cy.contains('Invalid username or password');
//     });
//   });
// });

// const url = 'https://example.com/login';

// Given('I am on the login page', () => {
//   cy.visit(url);
// });

// When('I enter valid credentials', () => {
//   cy.get('#username').type('valid-username');
//   cy.get('#password').type('valid-password');
//   cy.get('#login-button').click();
// });

// Then('I should be redirected to the dashboard page', () => {
//   cy.url().should('include', '/dashboard');
// });

// When('I enter invalid credentials', () => {
//   cy.get('#username').type('invalid-username');
//   cy.get('#password').type('invalid-password');
//   cy.get('#login-button').click();
// });

// Then('I should see an error message', () => {
//   cy.contains('Invalid username or password');
// });

const url = 'https://example.com/login';

Given('I am on the login page', () => {
  cy.visit(url);
});

When('I enter valid credentials', () => {
  cy.get('#username').type('valid-username');
  cy.get('#password').type('valid-password');
  cy.get('#login-button').click();
});

Then('I should be redirected to the dashboard page', () => {
  cy.url().should('include', '/dashboard');
});

When('I enter invalid credentials', () => {
  cy.get('#username').type('invalid-username');
  cy.get('#password').type('invalid-password');
  cy.get('#login-button').click();
});

Then('I should see an error message', () => {
  cy.contains('Invalid username or password');
});