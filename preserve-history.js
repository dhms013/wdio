const fs = require('fs');
const path = require('path');
const cpy = require('cpy');

const src = path.join(__dirname, 'allure-report', 'history');
const dest = path.join(__dirname, 'allure-results', 'history');

(async () => {
  if (fs.existsSync(src)) {
    await cpy([src + '/**'], dest, { parents: true });
    console.log('Allure history preserved.');
  } else {
    console.log('No allure-report/history folder found, skipping preserve-history.');
  }
})();