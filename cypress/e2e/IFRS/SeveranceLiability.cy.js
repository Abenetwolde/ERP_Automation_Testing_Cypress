import Login from "../../PageObjects/LoginPage.js"
const testData = require('../../fixtures/SeveranceLiability.json');

console.log(testData.url)
describe('SeveranceLiability testing ', () => {
    beforeEach(() => {
    
        // cy.getCookie('session_id').then((cookie) => {
        //     if (!cookie) {
        //         const loginObject = new Login()
        //                 cy.visit(`${testData.url}`)
        //                 loginObject.setUserName("hiwot")
        //                 loginObject.setPassword(1234)
        //                 loginObject.clickLogin();
        //     }
        //     else{
        //         cy.visit("https://172.21.35.239:8181/ERP-war/erp/ifrs/hrms/SeveranceLiability.xhtml")
        //     }},
           
        // )
        // cy.visit("https://172.21.35.239:8181/ERP-war/erp/ifrs/hrms/SeveranceLiability.xhtml")
        cy.get('body').then(($body) => {
            if ($body.text().includes('hiwot')) {
                return;
            } else {
                const loginObject = new Login()
                cy.visit(`${testData.url}`)
                loginObject.setUserName("hiwot")
                loginObject.setPassword(1234)
                loginObject.clickLogin();
            }
        });

    })


    testData.SeveranceLiability.forEach((data, i) => {
        it(`test datat ${data.testName}`, () => {
            // cy.visit("https://172.21.35.239:8181/ERP-war/erp/ifrs/hrms/SeveranceLiability.xhtml")
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
                cy.get('[id="frmLeaveBalance:tblAllBalance_rppDD"]').select("5")
                cy.wait(3000)
                cy.get('tr[data-ri="4"] td').contains(5)
            }
              
        })





    })
    

})
