import allureReporter from '@wdio/allure-reporter'
const { expect } = require('@wdio/globals')
const loginPage = require('../pageobjects/login.page')
const securePage = require('../pageobjects/secure.page')
const inventoryPage = require('../pageobjects/inventory.page')

describe('#1 Login using invalid credentials', () => {
    beforeEach(async () => {
        await loginPage.open()
    })
    it('should open the login page', async () => {
        allureReporter.addSeverity('critical')
        await expect(browser).toHaveUrl('https://www.saucedemo.com/')
        await expect(loginPage.welcomeLogo).toBeExisting()
    })
    it('should successfully login using valid credentials', async () => {
        allureReporter.addSeverity('critical')
        await loginPage.login()
        await expect(securePage.welcome).toBeExisting()
        await expect(securePage.welcome).toHaveText(
            expect.stringContaining('Swag Labs'))
    })
    it('should failed login using invalid credentials', async () => {
        allureReporter.addSeverity('critical')
        await loginPage.invalidPassword()
        await expect(securePage.errorLogin).toBeExisting()
        await expect(securePage.errorLogin).toHaveText('Epic sadface: Username and password do not match any user in this service')
        // await securePage.closeLoginAllert()
        // await expect(securePage.errorLogin).not.toBeExisting()
    })
    it('should failed login using empty credentials', async () => {
        allureReporter.addSeverity('critical')
        await loginPage.btnSubmit.click()
        await expect(securePage.errorLogin).toBeExisting()
        await expect(securePage.errorLogin).toHaveText('Epic sadface: Username is required')
        // await securePage.closeLoginAllert()
        // await expect(securePage.errorLogin).not.toBeExisting()
    })
    it('should failed login using empty username', async () => {
        allureReporter.addSeverity('critical')
        await loginPage.withoutUsername()
        await expect(securePage.errorLogin).toBeExisting()
        await expect(securePage.errorLogin).toHaveText('Epic sadface: Username is required')
        // await securePage.closeLoginAllert()
        // await expect(securePage.errorLogin).not.toBeExisting()
    })
    it('should failed login using empty password', async () => {
        allureReporter.addSeverity('critical')
        await loginPage.withoutPassword()
        await expect(securePage.errorLogin).toBeExisting()
        await expect(securePage.errorLogin).toHaveText('Epic sadface: Password is required')
        // await securePage.closeLoginAllert()
        // await expect(securePage.errorLogin).not.toBeExisting()
    })
    it('should failed login using locked out user account', async () => {
        allureReporter.addSeverity('critical')
        await loginPage.lockedAccount()
        await expect(securePage.errorLogin).toBeExisting()
        await expect(securePage.errorLogin).toHaveText('Epic sadface: Sorry, this user has been locked out.')
        // await securePage.closeLoginAllert()
        // await expect(securePage.errorLogin).not.toBeExisting()
    })
    it('should successfully login using problem user account (expected case)', async () => {
        allureReporter.addSeverity('trivial')
        await loginPage.problemUser()
        await expect(securePage.welcome).toBeExisting()
        const srcAttribute = await inventoryPage.inventoryContainer.getAttribute('src')
        await expect(srcAttribute).toContain('sl-404')
    })
    it('should successfully login using problem user account (unexpected case)', async () => {
        allureReporter.addSeverity('critical')
        await loginPage.problemUser()
        await expect(securePage.welcome).toBeExisting()
        const srcAttribute = await inventoryPage.inventoryContainer.getAttribute('src')
        await expect(srcAttribute).toContain('sauce-backpack')
    })
    it('should successfully login using performance glitch user account (expected case)', async () => {
        allureReporter.addSeverity('normal')
        const startTime = performance.now();
        await loginPage.performanceGlitchUser()
        const productsTitle = await securePage.welcome
        await productsTitle.waitForDisplayed({ timeout: 10000 })
        const endTime = performance.now()
        const loadTime = endTime - startTime
        const acceptableMinTime = 3000
        const acceptableMaxTime = 10001
        await expect(loadTime).toBeGreaterThan(acceptableMinTime)
        await expect(loadTime).toBeLessThan(acceptableMaxTime)
        await expect(securePage.welcome).toBeExisting()
        await expect(inventoryPage.inventoryList).toBeExisting()
    })
    it('should successfully login using performance glitch user account (unexpected case)', async () => {
        allureReporter.addSeverity('normal')
        const startTime = performance.now();
        await loginPage.performanceGlitchUser()
        const productsTitle = await securePage.welcome
        await productsTitle.waitForDisplayed({ timeout: 10000 })
        const endTime = performance.now()
        const loadTime = endTime - startTime
        const acceptableMaxTime = 2000
        await expect(loadTime).toBeLessThan(acceptableMaxTime)
        await expect(securePage.welcome).toBeExisting()
        await expect(inventoryPage.inventoryList).toBeExisting()
    })
})