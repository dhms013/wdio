const { expect } = require('@wdio/globals')
const loginPage = require('../pageobjects/login.page')
const SecurePage = require('../pageobjects/secure.page')
const inventoryPage = require('../pageobjects/inventory.page')

describe('#5 Test Every Function buttons in Dashboard', () => {
    beforeEach(async () => {
        await loginPage.open()
        await loginPage.login()
        await expect(SecurePage.welcome).toBeExisting()
        await expect(SecurePage.welcome).toHaveText(
            expect.stringContaining('Swag Labs'))
    })
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
    it('should close the sidebar menu', async () => {
        await inventoryPage.sideBarMenuOpen()
        await inventoryPage.sideBarMenuclose()
        await expect(inventoryPage.sidebarMenuWrap).toBeExisting()
    })
    it ('should click the all items button', async () => {
        await inventoryPage.sideBarMenuOpen()
        await inventoryPage.allItemsPage()
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
    })
    it ('should click the about button', async () => {
        await inventoryPage.sideBarMenuOpen()
        await inventoryPage.aboutPage()
        await expect(browser).toHaveUrl('https://saucelabs.com/')
    })
    it ('should click the logout button', async () => {
        await inventoryPage.sideBarMenuOpen()
        await inventoryPage.logoutAccount()
        await expect(browser).toHaveUrl('https://www.saucedemo.com/')
    })
    it ('should click the reset app state button', async () => {
        await inventoryPage.sideBarMenuOpen()
        await inventoryPage.resetAppStatePage()
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
    })
    it ('should filter products by name A to Z', async () => {
        await inventoryPage.azFilter()
        await expect(inventoryPage.sortFilter).toHaveValue('az')
    })
    it ('should filter products by name Z to A', async () => {
        await inventoryPage.zaFilter()
        await expect(inventoryPage.sortFilter).toHaveValue('za')
    })
    it ('should filter products by price low to high', async () => {
        await inventoryPage.lohiFilter()
        await expect(inventoryPage.sortFilter).toHaveValue('lohi')
    })
    it ('should filter products by price high to low', async () => {
        await inventoryPage.hiloFilter()
        await expect(inventoryPage.sortFilter).toHaveValue('hilo')
    })
})