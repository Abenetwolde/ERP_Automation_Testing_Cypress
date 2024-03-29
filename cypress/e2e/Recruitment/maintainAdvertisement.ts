import Login from "../../PageObjects/LoginPage.js"
import "../../support/auth.d.ts"
import { TableValidator, Validator } from "../../Helpers/Validator.js";
import { ErrorInputValidator } from "../../Helpers/ErrorInputValidator.js";
const testData = require('../../fixtures/Recruitment/maintainAdvertisement.json');

console.log(testData.url)
describe('recruitmentRequests testing ', () => {


    testData.maintainAdvertisement.forEach((data, i) => {
        it(` ${data.testName}`, () => {
            cy.loginCommand(testData.url, 'hiwot', 1234);

            cy.wait(1000)
            // click the first row of maintainAdvertisement table
            cy.get('[id="frmAdvert:tblRequestList_data"] tr').first().click();
            //input mediaType 
            cy.wait(500)
            cy.get('[id="frmAdvert:drdMediaType_label"]').click()
            // input NoOfEmployeesApproved number
            cy.wait(500)
            cy.get(`[data-label="${data.mediaType}"]`).click()
            cy.wait(500)
            cy.get('[id="frmAdvert:txtOccurrence"]').type(data.occurrenceText)
            cy.wait(500)
            // click add button 
            data.testId==2&& cy.get('[id="frmAdvert:btnAdd"]').click()
            // click save button 
           data.testId==1&&  cy.get('[id="frmAdvert:btnSave"]').click()
            cy.wait(500)
            if(data.testType=="validator")
            {
                Validator(data)
            }else{
                ErrorInputValidator(data)
            }

  
        })

    })
})

