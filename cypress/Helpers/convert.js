const json2csv = require('json2csv').parse;
const fs = require('fs');

const testData = {
  "url":"https://172.21.35.239:8181/ERP-war/Login.xhtml?continue=https://172.21.35.239:8181/ERP-war/erp/hrms/organization/OrganizationStruacture.xhtml",
  "DepartmentProcess": [
    {
      "testId":1,
      "testType":"validate",
      "testName":"should update DepartmentProcess data",
      "updateData": "INSA",
      "updatedEstablishOn":"12/09/2015",
      "expectedResult":{
        "mainText":"Success!"  
      }       
    },
    {
      "testId":2,
      "testType":"requird",
      "testName":"should not update DepartmentProcess with invalid data",
      "updateData": "INSA1",
      "expectedResult":{
        "mainText":"INSA1: Value should be a Text"
      }       
    },
    {
      "testId":3,
      "testType":"validate",
      "testName":"Seccesfuly save DepartmentProcess",
      "departmentName": "New",
      "expectedResult":{
        "mainText":"Success!",
        "subText" :"Successfully Saved." 
      }       
    },
    {
      "testId":4,
      "testType":"requird",
      "testName":"it should not save with invalid departmentName ",
      "departmentName ": "New12",
      "expectedResult":{
        "mainText":"Please Insert Work Unit Name"
      }       
    } ,   
    {
      "testId":5,
      "testType":"validate",
      "testName":"it should not save with duplicated data ",
      "departmentName ": "New",
      "expectedResult":{
        "mainText":"Error!"
        
      }       
    }   
  ]
};

// Convert JSON data to CSV
const fields = ['testId', 'testType', 'testName', 'updateData', 'updatedEstablishOn', 'expectedResult.mainText', 'expectedResult.subText'];
const csv = json2csv(testData.DepartmentProcess, { fields });

// Write CSV data to file
fs.writeFileSync('C:/Users/AB/Desktop/cypress/qa-cypress-project/cypress/fixtures/test-data.csv', csv);