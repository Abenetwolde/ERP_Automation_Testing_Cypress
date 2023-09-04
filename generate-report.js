const { Formatter } =require('cucumber-json-report-formatter');
const formatter = new Formatter();

const sourceFile = './jsonlogs/messages.ndjson';
const outputFile = './reports/cucumber-report.json';

 async function generateReport(sourceFile,outputFile) {
    await formatter.parseCucumberJson(sourceFile, outputFile);
  }
  generateReport(sourceFile,outputFile)