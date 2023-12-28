import { Validator } from "../../Helpers/Validator.js";
import Login from "../../PageObjects/LoginPage.js"
import "../../support/auth.d.ts"
const testData = require('../../fixtures/HrPlaining/demandAndSupplyAnalysis.json');

console.log(testData.url)
describe('leaveReturn test', () => {

        it(`there should be a table test `, () => {
            cy.loginCommand("https://172.21.35.239:8181/ERP-war/erp/hrms/leave/leaveReturn.xhtml", 'hiwot', 1234);
            cy.get('.ui-datatable-tablewrapper').should('be.visible')

        })
    })




