import Login from "../../PageObjects/LoginPage.js"
import "../../support/auth.js"
import { Validator } from "../../Helpers/Validator.js";
const testData = require('../../fixtures/Recruitment/candidateRegistration.json');

console.log(testData.url)
describe('SeveranceLiability testing ', () => {
    beforeEach(() => {
        cy.session("JSESSIONID", () => {
            // Check if the "JSESSIONID" cookie is present
            cy.getCookie("JSESSIONID").then((cookie) => {
                // If the cookie is not present, log in
                if (!cookie) {
                    cy.loginCommand(testData.url, 'hiwot', 1234);
                    //reusable login command
                }

            })
        });
    })

    // function validate(id){
    //     switch(id){
    //         case "1":
    //             cy.get('.ui-growl-message').should('be.visible').invoke('text').should('contain', data.expectedResult.mainText).should('contain', data.expectedResult.subText)
    //             //do somth
    //             break;
    //             case 2:
    //                 //do somth
    //                 break;
    //                 case 3:
    //                     //do somth
    //                     break;
    //                     case 4:
    //                         //do somth
    //                         break;

    //     }
    // }
    testData.candidateRegistration.forEach((data, i) => {
        it(` ${data.testName}`, () => {
            cy.visit("https://172.21.35.239:8181/ERP-war/erp/hrms/recruitment/candidateRegistration.xhtml")
            // click the plus icon
            cy.get('[id="frmTop:btnNew"]').click()
            // click vacancy number dropdown 
            cy.get('[id="frmCandidate:somBatchCode"]').click()
            // select vacancy number
            cy.get('li.ui-selectonemenu-item[data-label="vacancy-99"]').click()
            // click job title dropdown 
            cy.get('[id="frmCandidate:somJobTypes"]').click()
            // select job title 
            cy.get('[data-label="Administrative Assistant I"]').click({ force: true })
            // type first name 
            cy.get('[id="frmCandidate:txtFirstName"]').type(data.firstName)
            // type middle name 
            cy.get('[id="frmCandidate:txtMiddleName"]').type(data.middleName)
            // type last name 
            cy.get('[id="frmCandidate:txtLastName"]').type(data.lastName)
            // click Nationality dropdown 
            cy.get('[id="frmCandidate:txtNationality_label"]').click()
            // select Nationality 
            cy.get('[data-label="Ethiopian"]').click()
            // click Address Button
          
            {
                data.testId == 2 && 
                cy.get('[id="frmCandidate:btnResidentialAddress "]').click()
                // select Address 
                cy.get('[id="frmCandidate:addressTree:60:nodetxt"]').click({force: true})
                //close icon
                cy.get('span.ui-icon.ui-icon-closethick').click({force: true})
            }
            // // type Phone number}
            cy.get('[id="frmCandidate:txtDateOfBirth"]').type(data.dateOfBirth)
            // type phone number 
            cy.get('[id="frmCandidate:txtMobileNo"]').type(data.MoblePhone)
            // click save button
            cy.get('[id="frmCandidate:btnSave"]').click()
            cy.wait(2000)

            ////validate tests
            Validator(data)




        })
    })


})

