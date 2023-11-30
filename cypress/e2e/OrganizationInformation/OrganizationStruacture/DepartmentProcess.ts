
import { ErrorInputValidator } from "../../../Helpers/ErrorInputValidator.js";
import { Validator } from "../../../Helpers/Validator.js";
// import "../../../support/auth.js"
const testData = require('../../../fixtures/OrganizationInformation/OrganizationStruacture/DepartmentProcess.json');
import { generateRandomString } from "../../../Helpers/RandomString.js";
import "../../../support/auth.d.ts"
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


    testData.DepartmentProcess.forEach((data, i) => {
        it(` ${data.testName}`, () => {
            cy.loginCommand(testData.url, 'hiwot', 1234);
            cy.get('span.ui-treenode-label.ui-corner-all').contains('INSA=>1').click()
            cy.wait(1000)
            //click departement tab
            cy.get(' a[href="#tabWorkUnit"]').click()
            //clear and type establish on
            switch (data.testId) {
                case 1:
                    // cy.get('[id="frmOrganizationStructure:txtWorkUnitName"]').clear({force:true}).type(data.updateData)
                    //clear and type establish on
                    cy.get('[id="frmOrganizationStructure:txtEstablishedOn"]').clear({ force: true }).type(data.updatedEstablishOn)
                    //click update button
                    cy.get('[id="frmOrganizationStructure:btnSave"]').click()
                    break;
                case 2:
                    cy.get('[id="frmOrganizationStructure:txtWorkUnitName"]').clear().type(data.updateData)
                    //click update button
                    cy.get('[id="frmOrganizationStructure:btnSave"]').click()
                    break;
                case 3:
                    //click New Button
                    cy.wait(500)
                    cy.get('[id="frmOrganizationStructure:btnNew"]').click()
                    //clear and type department Name
                    cy.wait(500)
                    cy.get('[id="frmOrganizationStructure:txtWorkUnitName"]').type(generateRandomString(5))
                    //click save button
                    cy.get('[id="frmOrganizationStructure:btnSave"]').click()
                    break;
                case 4:
                    //click New Button
                    cy.get('[id="frmOrganizationStructure:btnNew"]').click()
                    //clear and type department Name
                    cy.get('[id="frmOrganizationStructure:txtWorkUnitName"]').type("new1")
                    //click save button
                    cy.get('[id="frmOrganizationStructure:btnSave"]').click()
                    break;
                case 5:
                    //click New Button
                    cy.wait(500)
                    cy.get('[id="frmOrganizationStructure:btnNew"]').click()
                    //clear and type department Name
                    cy.wait(500)
                    cy.get('[id="frmOrganizationStructure:txtWorkUnitName"]').type("Ac")
                    //click save button
                    cy.get('[id="frmOrganizationStructure:btnSave"]').click()
                    break;
            }

            ///test the the case
            cy.wait(1000)
            if (data.testType == "validate") {
                Validator(data)
            } else {
                ErrorInputValidator(data)
            }
            cy.reload()

        }


        )





    })


})

