const { execSync } = require('child_process');
const steps = [
  'npm run preserve-history',
  'npm run clean-results',
  'npm run copy-configs',
  'npm run run-wdio',
  'npm run generate-report',
  'npm run open-report'
];

for (const step of steps) {
  try {
    execSync(step, { stdio: 'inherit' });
  } catch (err) {
    // Ignore failures to keep going
  }
}