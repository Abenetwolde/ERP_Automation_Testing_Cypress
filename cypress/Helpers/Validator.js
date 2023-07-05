module.exports.Validator = function (id) {
    console.log("validator")
    switch (id) {
        case "1":
            cy.get('.ui-growl-message').should('be.visible').invoke('text').should('contain', data.expectedResult.mainText).should('contain', data.expectedResult.subText)
            //do somth
            break;
            case 2:
                //do somth
                break;
    }
  }