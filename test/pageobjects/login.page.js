const { $ } = require('@wdio/globals')
const Page = require('./page');
const credentials = require('./credentials')

class loginPage extends Page {
    get welcomeLogo () {
        return $('.login_logo');
    }
    get inputUsername () {
        return $('#user-name');
    }
    get inputPassword () {
        return $('#password');
    }
    get btnSubmit () {
        return $('#login-button');
    }

    async login () {
        await this.inputUsername.setValue(credentials.validUser.username)
        await this.inputPassword.setValue(credentials.validUser.password)
        await this.btnSubmit.click()
    }
    async invalidPassword () {
        await this.inputUsername.setValue(credentials.invalidUser.username)
        await this.inputPassword.setValue(credentials.invalidUser.password)
        await this.btnSubmit.click()
    }
    async lockedAccount () {
        await this.inputUsername.setValue(credentials.lockedAccount.username)
        await this.inputPassword.setValue(credentials.lockedAccount.password)
        await this.btnSubmit.click()
    }
    async problemUser () {
        await this.inputUsername.setValue(credentials.problemUser.username)
        await this.inputPassword.setValue(credentials.problemUser.password)
        await this.btnSubmit.click()
    }
    async performanceGlitchUser () {
        await this.inputUsername.setValue(credentials.performanceGlitchUser.username)
        await this.inputPassword.setValue(credentials.performanceGlitchUser.password)
        await this.btnSubmit.click()
    }
    async errorUser () {
        await this.inputUsername.setValue(credentials.errorUser.username)
        await this.inputPassword.setValue(credentials.errorUser.password)
        await this.btnSubmit.click()
    }
    async visualUser () {
        await this.inputUsername.setValue(credentials.visualUser.username)
        await this.inputPassword.setValue(credentials.visualUser.password)
        await this.btnSubmit.click()
    }
    async withoutUsername () {
        await this.inputPassword.setValue(credentials.validUser.password)
        await this.btnSubmit.click()
    }
    async withoutPassword () {
        await this.inputUsername.setValue(credentials.validUser.username)
        await this.inputPassword.setValue('')
        await this.btnSubmit.click()
    }

    open () {
        return super.open(
            'login',
            'invalidPassword',
            'lockedAccount',
            'problemUser',
            'performanceGlitchUser',
            'errorUser',
            'visualUser',
            'withoutUsername',
            'withoutPassword');
    }
}

module.exports = new loginPage();
