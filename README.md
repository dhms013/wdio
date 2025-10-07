# WDIO basic

Welcome to one of my backup storage. this repositories will be about the sample of how to write webdriverIO. This isn't the perfect way to write the script test using webdriverIO, but let's just say it's one of so many form of writting your webdriverIO. I will try to update this repositories when I feel like it.

### Note
- This test feature includes taking screenshots on errors and automatically opens the report when all your tests are finished.
- Every human has the freedom to write their code how they want, but just make sure it's still understandable for your team 😉
- Before starting, make sure you have already installed the basic tools like Node.js, etc.
- Be careful if your browser auto-update is active. Sometimes drivers from webdriverIO (chromedriver, geckodriver, etc) aren't updated as soon as the latest browser is released.
- This repository tests the [SauceDemo Swag Labs](https://www.saucedemo.com/) application.
- I save the credentials inside a '.env' file. So you need to make one if you want to try my code.

---

## Known Setup Issues & Solutions

WebdriverIO projects have their own unique quirks, especially when running in different environments like WSL2.

### Allure Report Won't Open in WSL2

**Problem:** After running tests, the `allure open` command fails to launch the report in a browser on WSL2.

**Explanation:** WSL2 doesn't have a built-in graphical user interface (GUI). The `allure open` command tries to launch a file browser or application, which fails in the WSL2 command-line environment.

**Solution:** not sure about the solution. I tried so many method, but still failed to make the allure result automatically open

---

## Project Architecture

This project follows a classic WebdriverIO structure with some custom scripts for reporting.

```
wdio-basic/
├── .env
├── .env.example
├── .gitignore
├── .github/workflows/
├── allure-configs/           # Custom configurations for the Allure report
│   ├── categories.json
│   ├── environment.properties
│   └── executor.json
├── test/                    # All test-related files
│   ├── pageobjects/         # Page Object Model (POM) files
│   │   ├── inventory.page.js
│   │   ├── login.page.js
│   │   ├── page.js
│   │   └── secure.page.js
│   └── specs/               # The actual test files
│       ├── 1.login.e2e.js
│       └── 2.dashboardFunction.e2e.js
├── copy-configs.js          # Custom script for Allure report flow
├── preserve-history.js      # Custom script for Allure report flow
├── run-all.js               # Custom command to run tests and open the report
├── package.json
└── wdio.conf.js             # Main WebdriverIO configuration file
```

---

## Getting Started

### Option A: Clone and Run

1.  Open your terminal (PowerShell, CMD, etc.).
2.  Navigate to your desired directory.
3.  Clone this repository:
    ```bash
    git clone git@github.com:dhms013/wdio.git
    cd wdio
    ```
4.  Install dependencies:
    ```bash
    npm install
    ```
5.  Run the tests:
    ```bash
    npm run test
    ```

### Option B: Write from Scratch

I apologize, but believe me, it's better if you just ask an AI chat 🤣