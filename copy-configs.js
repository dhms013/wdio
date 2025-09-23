const fs = require('fs');
const path = require('path');
const cpy = require('cpy');

const src = path.join(__dirname, 'allure-configs');
const dest = path.join(__dirname, 'allure-results');

(async () => {
  if (fs.existsSync(src)) {
    await cpy([src + '/**'], dest, { parents: true });
    console.log('Allure configs copied.');
  } else {
    console.log('No allure-configs folder found, skipping copy-configs.');
  }
})();