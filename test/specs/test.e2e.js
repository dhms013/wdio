const { expect } = require('@wdio/globals')
const loginPage = require('../pageobjects/login.page')
const SecurePage = require('../pageobjects/secure.page')
const inventoryPage = require('../pageobjects/inventory.page')
const securePage = require('../pageobjects/secure.page')

describe('Login to Swag Labs', () => {
    it('should failed login using invalid credentials', async () => {
        await loginPage.open()
        await loginPage.invalidPassword()
        await expect(securePage.errorLogin).toBeExisting()
        await expect(securePage.errorLogin).toHaveText('Epic sadface: Username and password do not match any user in this service')
    })

    it('should failed login using locked out user account', async () => {
        await loginPage.open()
        await loginPage.lockedAccount()
        await expect(securePage.errorLogin).toBeExisting()
        await expect(securePage.errorLogin).toHaveText('Epic sadface: Sorry, this user has been locked out.')
    })

    it('should login using valid credentials', async () => {
        await loginPage.open()
        await loginPage.login()
        await expect(SecurePage.welcome).toBeExisting()
        await expect(SecurePage.welcome).toHaveText(
            expect.stringContaining('Swag Labs'))
    })
})

describe('Open sidebar menu', () => {
    it('should open the sidebar menu', async () => {
        await inventoryPage.sideBarMenuOpen()
        await expect(inventoryPage.sidebarMenu).toBeExisting()
        await expect(inventoryPage.sidebarMenu).toHaveText(
            expect.stringContaining('All Items'),
            expect.stringContaining('About'),
            expect.stringContaining('Logout'),
            expect.stringContaining('Reset App State')
        )
    })
})

describe('close sidebar menu', () => {
    it('should close the sidebar menu', async () => {
        await inventoryPage.sideBarMenuclose()
        await expect(inventoryPage.sidebarMenuWrap).toBeExisting()
    })
})