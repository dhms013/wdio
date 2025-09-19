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

    async sideBarMenuOpen () {
        await this.openBurgerBtn.click()
    }
    async sideBarMenuclose () {
        await this.closeBurgerBtn.click()
    }

    open () {
        return super.open('sideBarMenuOpen', 'sideBarMenuclose')
    }
}

module.exports = new inventoryPage()