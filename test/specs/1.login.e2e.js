const { expect } = require('@wdio/globals')
const loginPage = require('../pageobjects/login.page')
const securePage = require('../pageobjects/secure.page')

describe('#1 Login using invalid credentials', () => {
    it('should open the login page', async () => {
        await loginPage.open()
        await expect(browser).toHaveUrl('https://www.saucedemo.com/')
        await expect(loginPage.welcomeLogo).toBeExisting()
    })
    it('should input invalid credentials', async () => {
        await loginPage.invalidPassword()
        await expect(securePage.errorLogin).toBeExisting()
        await expect(securePage.errorLogin).toHaveText('Epic sadface: Username and password do not match any user in this service')
    })
})
describe('#2 Login using empty credentials', () => {
    it('should open the login page', async () => {
        await loginPage.open()
        await expect(browser).toHaveUrl('https://www.saucedemo.com/')
        await expect(loginPage.welcomeLogo).toBeExisting()
    })
    it('should failed login using empty credentials', async () => {
        await loginPage.btnSubmit.click()
        await expect(securePage.errorLogin).toBeExisting()
        await expect(securePage.errorLogin).toHaveText('Epic sadface: Username is required')
    })
    it('should failed login using empty username', async () => {
        await loginPage.withoutUsername()
        await expect(securePage.errorLogin).toBeExisting()
        await expect(securePage.errorLogin).toHaveText('Epic sadface: Username is required')
    })
    it('should failed login using empty password', async () => {
        await loginPage.withoutPassword()
        await expect(securePage.errorLogin).toBeExisting()
        await expect(securePage.errorLogin).toHaveText('Epic sadface: Password is required')
    })
})
describe('#3 Login using locked out user account', () => {
    it('should open the login page', async () => {
        await loginPage.open()
        await expect(browser).toHaveUrl('https://www.saucedemo.com/')
        await expect(loginPage.welcomeLogo).toBeExisting()
    })
    it('should input locked out user account', async () => {
        await loginPage.lockedAccount()
        await expect(securePage.errorLogin).toBeExisting()
        await expect(securePage.errorLogin).toHaveText('Epic sadface: Sorry, this user has been locked out.')
    })
})
describe('#4 Login using valid credentials', () => {
    it('should open the login page', async () => {
        await loginPage.open()
        await expect(browser).toHaveUrl('https://www.saucedemo.com/')
        await expect(loginPage.welcomeLogo).toBeExisting()
    })
    it('should input valid credentials', async () => {
        await loginPage.login()
        await expect(securePage.welcome).toBeExisting()
        await expect(securePage.welcome).toHaveText(
            expect.stringContaining('Swag Labs'))
    })
})