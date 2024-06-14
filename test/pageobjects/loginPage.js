import { $ } from '@wdio/globals'
import scrollScreen from "../../helpers/scrollScreen.js"

class LoginPage {
    get usernameInput() { return $('~test-Username') }
    get passwordInput() { return $('~test-Password') }
    get loginButton() { return $('~test-LOGIN') }
    get errorMessage() { return $('//*[@content-desc="test-Error message"]/android.widget.TextView') }
    get standardUserButton() { return $('//android.widget.TextView[@text="standard_user"]')}
    get lockUserButton() { return $('//*[@content-desc="test-locked_out_user"]')}
    get problemUserButton() { return $('//*[@content-desc="test-problem_user"]')}
    get product() { return $('//android.widget.TextView[@text="PRODUCTS"]')}
    get menu() { return $('//android.view.ViewGroup[@content-desc="test-Menu"]')}
    get logoutButton() { return $('//android.widget.TextView[@text="LOGOUT"]')}

    

    async login(username, password) {
        await this.usernameInput.setValue(username)
        await this.passwordInput.setValue(password)
        await this.loginButton.click()
    }

    // async getErrorMessage() {
    //     await this.errorMessage.getText();
    // }

    async logout() {
        await this.menu.click()
        await this.logoutButton.click()
    }
}

export default new LoginPage()