module.exports.ErrorInputValidator = function (data) {
  console.log("validator")
  cy.wait(1000)
  cy.get('.ui-message-error-icon')
    .should('have.attr', 'title', data.expectedResult.mainText);
}