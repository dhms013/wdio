const { $ } = require('@wdio/globals')
const Page = require('./page');
const validUser = process.env.VALID_USER_USERNAME
const lockedAccount = process.env.LOCKED_OUT_USER_USERNAME
const problemUser = process.env.PROBLEM_USER_USERNAME
const performanceGlitchUser = process.env.PERFORMANCE_GLITCH_USER_USERNAME
const errorUser = process.env.ERROR_USER_USERNAME
const visualUser = process.env.VISUAL_USER_USERNAME
const validPassword = process.env.VALID_USER_PASSWORD
const invalidPassword = process.env.INVALID_USER_PASSWORD

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
        await this.inputUsername.setValue(validUser)
        await this.inputPassword.setValue(validPassword)
        await this.btnSubmit.click()
    }
    async invalidPassword () {
        await this.inputUsername.setValue(validUser)
        await this.inputPassword.setValue(invalidPassword)
        await this.btnSubmit.click()
    }
    async lockedAccount () {
        await this.inputUsername.setValue(lockedAccount)
        await this.inputPassword.setValue(validPassword)
        await this.btnSubmit.click()
    }
    async problemUser () {
        await this.inputUsername.setValue(problemUser)
        await this.inputPassword.setValue(validPassword)
        await this.btnSubmit.click()
    }
    async performanceGlitchUser () {
        await this.inputUsername.setValue(performanceGlitchUser)
        await this.inputPassword.setValue(validPassword)
        await this.btnSubmit.click()
    }
    async errorUser () {
        await this.inputUsername.setValue(errorUser)
        await this.inputPassword.setValue(validPassword)
        await this.btnSubmit.click()
    }
    async visualUser () {
        await this.inputUsername.setValue(visualUser)
        await this.inputPassword.setValue(validPassword)
        await this.btnSubmit.click()
    }
    async withoutUsername () {
        await this.inputPassword.setValue(validPassword)
        await this.btnSubmit.click()
    }
    async withoutPassword () {
        await this.inputUsername.setValue(validUser)
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
