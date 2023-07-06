module.exports.Validator = function (data) {
    console.log("validator")
    switch (data.testId) {
        case 1:
            cy.get('.ui-growl-message').should('be.visible').invoke('text').should('contain', data.expectedResult.mainText).should('contain', data.expectedResult.subText)
            break;
        case 2:
            cy.get('.ui-growl-message').should('be.visible').invoke('text').should('contain', data.expectedResult.mainText)/* .should('contain', data.expectedResult.subText) */
            break;
    }
}