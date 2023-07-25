module.exports.Validator = function (data) {
    console.log("validator")
    if (data.testId == 1) {
        cy.get('.ui-growl-message').should('be.visible').invoke('text').should('contain', data.expectedResult.mainText)
    }
    else {
        cy.get('.ui-growl-message').should('be.visible').invoke('text').should('contain', data.expectedResult.mainText).should('contain', data?.expectedResult?.subText)
    }
}


module.exports.TableValidator = function (tableId,numberOfRow,validator) {
    cy.get(tableId)
        .its('length')
        .should(validator, numberOfRow);
}