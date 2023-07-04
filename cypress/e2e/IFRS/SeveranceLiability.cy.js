import Login from "../../PageObjects/LoginPage.js"
import "../../support/auth.js"
const testData = require('../../fixtures/IFRS/SeveranceLiability.json');

console.log(testData.url)
describe('SeveranceLiability testing ', () => {
    beforeEach(() => {
      cy.session("JSESSIONID", () => {
            // Check if the "JSESSIONID" cookie is present
            cy.getCookie("JSESSIONID").then((cookie) => {
              // If the cookie is not present, log in
              if (!cookie) {
                cy.loginCommand(testData.url,'hiwot', 1234);
                //reusable login command
              }
              else cy.visit("https://172.21.35.239:8181/ERP-war/erp/ifrs/hrms/SeveranceLiability.xhtml")
            })
          });
    })


    testData.SeveranceLiability.forEach((data, i) => {
        it(` ${data.testName}`, () => {
            cy.visit("https://172.21.35.239:8181/ERP-war/erp/ifrs/hrms/SeveranceLiability.xhtml")
            cy.get('[id="frmLeaveBalance:txtYear"]').click()
            cy.get('[data-label="2015-2016"]').click()
            cy.get('[id="frmLeaveBalance:tblAllBalance:j_idt77:filter"]').type(data.employid)
            // cy.get('tbody tr:first-child td').each(($el) => {
            //     cy.wrap($el).should('have.attr', 'role', 'gridcell')
            //   })
            // cy.get('[id="frmLeaveBalance:tblAllBalance_data"] tr').then(($rows) => {
            //     const rowCount = $rows.length
            //     for (let i = 0; i < rowCount; i++) {
            //       cy.get('tr[data-ri="0"] td',{ timeout: 30000 }).eq(i).wait(2000)./* .should('have.attr', 'role', 'gridcell'). */contains('have.text', 'fc')
            //     }
            //   })
            if (data.testId == 2) {
                cy.get('tr.ui-widget-content.ui-datatable-empty-message td[colspan="7"]').should('contain', 'No records found.') 
                cy.reload()
            }
            data.testId == 1 && cy.get('[id="frmLeaveBalance:tblAllBalance_data"] tr').then(($rows) => {
                const rowCount = $rows.length
                for (let i = 0; i < rowCount; i++) {
                    cy.get('tr[data-ri="0"] ')
                        // .eq(i)
                        .within(() => {
                            cy.get('td')
                                .contains(data.expectedResult.mainText)
                            // .then(($el) => {
                            //   // $el is the td element that contains "fc" text
                            //   // You can perform additional actions or assertions on $el here
                            // })
                        })
                }
            })
            if (data.testId == 3){
                cy.reload()
                cy.get('[id="frmLeaveBalance:txtYear"]').click()
                cy.get('[data-label="2015-2016"]').click()
                cy.get('[id="frmLeaveBalance:tblAllBalance_rppDD"]').select("5")
            
                cy.get('tr[data-ri="4"]')
  .find('td')
  .first()
  .should('have.text', '5');
                // cy.get('tr[data-ri="4"] td').contains(5)
            }
              
        })





    })
    

})

