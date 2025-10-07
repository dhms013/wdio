import allureReporter from '@wdio/allure-reporter'
const { expect } = require('@wdio/globals')
const loginPage = require('../pageobjects/login.page')
const inventoryPage = require('../pageobjects/inventory.page')

describe('#2 Test Every Function buttons in Dashboard', () => {
    beforeEach(async () => {
        await loginPage.open()
        await loginPage.login()
    })
    it('should add product to the cart', async () => {
        allureReporter.addSeverity('critical')
        await inventoryPage.addToCart()
        await expect(inventoryPage.removeBtn).toBeExisting()
        await expect(inventoryPage.shoppingcartBadge).toHaveText('1')
    })
    it('should remove product from the cart', async () => {
        allureReporter.addSeverity('critical')
        await inventoryPage.removeFromCart()
        await expect(inventoryPage.addToCartBtn).toBeExisting()
        await expect(inventoryPage.shoppingcartBadge).not.toBeExisting()
    })
    it ('should filter products by name A to Z', async () => {
        allureReporter.addSeverity('normal')
        await inventoryPage.azFilter()
        await expect(inventoryPage.sortFilter).toHaveValue('az')
    })
    it ('should filter products by name Z to A', async () => {
        allureReporter.addSeverity('normal')
        await inventoryPage.zaFilter()
        await expect(inventoryPage.sortFilter).toHaveValue('za')
    })
    it ('should filter products by price low to high', async () => {
        allureReporter.addSeverity('normal')
        await inventoryPage.lohiFilter()
        await expect(inventoryPage.sortFilter).toHaveValue('lohi')
    })
    it ('should filter products by price high to low', async () => {
        allureReporter.addSeverity('normal')
        await inventoryPage.hiloFilter()
        await expect(inventoryPage.sortFilter).toHaveValue('hilo')
    })
    it('should open the sidebar menu', async () => {
        allureReporter.addSeverity('critical')
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
        allureReporter.addSeverity('critical')
        await inventoryPage.sideBarMenuOpen()
        await inventoryPage.sideBarMenuclose()
        await expect(inventoryPage.sidebarMenuWrap).toBeExisting()
    })
    it ('should click the all items button', async () => {
        allureReporter.addSeverity('normal')
        await inventoryPage.sideBarMenuOpen()
        await inventoryPage.allItemsPage()
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
    })
    it ('should click the about button', async () => {
        allureReporter.addSeverity('critical')
        await inventoryPage.sideBarMenuOpen()
        await inventoryPage.aboutPage()
        await expect(browser).toHaveUrl('https://saucelabs.com/')
    })
    it ('should click the logout button', async () => {
        allureReporter.addSeverity('critical')
        await inventoryPage.sideBarMenuOpen()
        await inventoryPage.logoutAccount()
        await expect(browser).toHaveUrl('https://www.saucedemo.com/')
        await expect(loginPage.welcomeLogo).toBeExisting()
        await expect(loginPage.welcomeLogo).toHaveText(
            expect.stringContaining('Swag Labs'))
    })
    it ('should click the reset app state button', async () => {
        allureReporter.addSeverity('normal')
        await inventoryPage.addToCart()
        await inventoryPage.sideBarMenuOpen()
        await inventoryPage.resetAppStatePage()
        await expect(inventoryPage.shoppingcartBadge).not.toBeExisting()
    })
    it ('should click the shopping cart button', async () => {
        allureReporter.addSeverity('critical')
        await inventoryPage.shopingcart()
        await expect(browser).toHaveUrl('https://www.saucedemo.com/cart.html')
        await inventoryPage.continueShopping()
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
    })
})