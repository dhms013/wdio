const { $ } = require('@wdio/globals')
const Page = require('./page');

class inventoryPage extends Page {
    get openBurgerBtn () {
        return $('#react-burger-menu-btn')
    }
    get closeBurgerBtn () {
        return $('#react-burger-cross-btn')
    }
    get sidebarMenu () {
        return $('.bm-item-list')
    }
    get sidebarMenuWrap () {
        return $('.bm-menu-wrap')
    }
    get allItemsBtn () {
        return $('#inventory_sidebar_link')
    }
    get aboutBtn () {
        return $('#about_sidebar_link')
    }
    get logoutBtn () {
        return $('#logout_sidebar_link')
    }
    get resetAppStateBtn () {
        return $('#reset_sidebar_link')
    }
    get sortFilter () {
        return $('.product_sort_container')
    }
    get shopingChartBtn () {
        return $('.shopping_cart_link')
    }
    get continueShoppingBtn () {
        return $('#continue-shopping')
    }
    get addToCartBtn () {
        return $('#add-to-cart-sauce-labs-backpack')
    }
    get removeBtn () {
        return $('#remove-sauce-labs-backpack')
    }
    get shoppingChartBadge () {
        return $('.shopping_cart_badge')
    }
    get inventoryList () {
        return $('.inventory_list')
    }
    get inventoryContainer () {
        return $('[data-test="inventory-item-sauce-labs-backpack-img"]')
    }
    
    async sideBarMenuOpen () {
        await this.openBurgerBtn.click()
    }
    async sideBarMenuclose () {
        await this.closeBurgerBtn.click()
    }
    async allItemsPage () {
        await this.allItemsBtn.click()
    }
    async aboutPage () {
        await this.aboutBtn.click()
    }
    async logoutAccount () {
        await this.logoutBtn.click()
    }
    async resetAppStatePage () {
        await this.resetAppStateBtn.click()
    }
    async azFilter () {
        await this.sortFilter.selectByVisibleText('Name (A to Z)')
    }
    async zaFilter () {
        await this.sortFilter.selectByVisibleText('Name (Z to A)')
    }
    async lohiFilter () {
        await this.sortFilter.selectByVisibleText('Price (low to high)')
    }
    async hiloFilter () {
        await this.sortFilter.selectByVisibleText('Price (high to low)')
    }
    async addToCart () {
        await this.addToCartBtn.click()
    }
    async removeFromCart () {
        await this.removeBtn.click()
    }
    async shopingChart () {
        await this.shopingChartBtn.click()
    }
    async continueShopping () {
        await this.continueShoppingBtn.click()
    }
    async shoppingChartIcon () {
        return this.shoppingChartBadge.getText()
    }

    open () {
        return super.open(
            'sideBarMenuOpen', 
            'sideBarMenuclose', 
            'allItemsPage', 'aboutPage', 
            'logoutAccount', 'resetAppStatePage', 
            'azFilter', 
            'zaFilter', 
            'lohiFilter', 
            'hiloFilter',
            'addToCart',
            'removeFromCart',
            'shopingChart',
            'continueShopping'
        )}
}

module.exports = new inventoryPage()