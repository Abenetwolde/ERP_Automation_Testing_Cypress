const { lighthouse, prepareAudit } = require("@cypress-audit/lighthouse");
// const cucumber = require('cypress-cucumber-preprocessor').default;
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
const preprocessor = require('@badeball/cypress-cucumber-preprocessor');
const createEsbuildPlugin = require('@badeball/cypress-cucumber-preprocessor/esbuild');
const csv = require('fast-csv');
function setViewPortsAndUserAgent(device) {
    if (device === 'mob' || device === 'mobile') {
        return {
            viewportWidth: 360,
            viewportHeight: 780,
            userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 12_1_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/16D57'
        }
    }
    if (device === 'web' || device === 'desktop') {
        return {
            viewportWidth: 1266,
            viewportHeight: 768,
            userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.190 Safari/537.36'
        }
    }

    throw new Error('device not supported - [please set device to mob or web]')
}
module.exports = (on, config) => {
    on('task', {
      readCSV(filename) {
        return new Promise((resolve, reject) => {
          const rows = [];
          fs.createReadStream(filename)
            .pipe(csv.parse({ headers: true }))
            .on('error', (error) => reject(error))
            .on('data', (row) => rows.push(row))
            .on('end', () => resolve(rows));
        });
      },
    });
  };
module.exports = (on, config) => {
    const viewportConfig = setViewPortsAndUserAgent(config.env.device)

    config = Object.assign({}, viewportConfig)

    return config
}
module.exports = (on, config) => {
    on('before:browser:launch', (browser = {}, launchOptions) => {
      prepareAudit(launchOptions);
    });
  
    on('task', {
      lighthouse: lighthouse(),
    });
  };
  // module.exports = (on, config) => {
  //   on('file:preprocessor', cucumber());
  // };
  async function setupNodeEvents(on, config) {
    await preprocessor.addCucumberPreprocessorPlugin(on, config);
    on(
      'file:preprocessor',
      createBundler({
        plugins: [createEsbuildPlugin.default(config)],
      })
    );
    return config;
  }
  
  module.exports = (on, config) => {
    setupNodeEvents(on, config);
  };