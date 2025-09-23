const { $ } = require('@wdio/globals')
const Page = require('./page');

class SecurePage extends Page {
    get flashAlert () {
        return $('#flash');
    }
    get welcome () {
        return $('.app_logo')
    }
    get errorLogin () {
        return $('.error-message-container')
    }

    async closeLoginAllert() {
        await this.errorLogin.click()
    }

    open () {
        return super.open('closeLoginAllert');
    }
}

module.exports = new SecurePage();
