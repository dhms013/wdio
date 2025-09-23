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

    open () {
        return super.open(
            'sideBarMenuOpen', 
            'sideBarMenuclose', 
            'allItemsPage', 'aboutPage', 
            'logoutAccount', 'resetAppStatePage', 
            'azFilter', 
            'zaFilter', 
            'lohiFilter', 
            'hiloFilter'
        )}
}

module.exports = new inventoryPage()