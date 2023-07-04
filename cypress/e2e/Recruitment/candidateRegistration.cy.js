import Login from "../../PageObjects/LoginPage.js"
import "../../support/auth.js"
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
                else cy.visit("https://172.21.35.239:8181/ERP-war/erp/ifrs/hrms/SeveranceLiability.xhtml")
            })
        });
    })


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
            cy.get('[data-label="Administrative Assistant I"]').click({force: true})
            // type first name 
            cy.get('[id="frmCandidate:txtFirstName"]').type("Abnet ")
            // type middle name 
            cy.get('[id="frmCandidate:txtMiddleName"]').type("wolde")
            // type last name 
            cy.get('[id="frmCandidate:txtLastName"]').type("ndaw")
            // click Nationality dropdown 
            cy.get('[id="frmCandidate:txtNationality_label"]').click()
            // select Nationality 
            cy.get('[data-label="Ethiopian"]').click()
            // type last name 
            cy.get('[id="frmCandidate:txtDateOfBirth"]').type("12/09/1025")
              // type phone number 
            cy.get('[id="frmCandidate:txtMobileNo"]').type("+251947081180")
            // click save button
            cy.get('[id="frmCandidate:btnSave"]').click()

            ////validate tests
            switch(data.id){
                case 1:
                    //do somth
                    break;
                    case 2:
                        //do somth
                        break;
                        case 3:
                            //do somth
                            break;
                            case 4:
                                //do somth
                                break;

            }

     
        })
    })


})

