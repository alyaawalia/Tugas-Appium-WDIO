import { $, driver, expect } from '@wdio/globals'
import scrollScreen from "../../helpers/scrollScreen.js"
import LoginPage from "../pageobjects/loginPage.js";

describe('FITUR LOGIN APLIKASI SWAGLAB', function () {
    after (async function(){
        await driver.reloadSession()
    })
    
    it('login dengan klik tombol locked_out_user ', async function () {
        await scrollScreen(600, 100)
        await LoginPage.lockUserButton.click()
        await scrollScreen(100, 600)
        await LoginPage.loginButton.click()
        await expect(LoginPage.errorMessage).toHaveText('Sorry, this user has been locked out.')
    })

    it('login dengan klik tombol standard_user ', async function () {
        await scrollScreen(600, 100)
        await LoginPage.standardUserButton.click()
        await scrollScreen(100, 600)
        await LoginPage.loginButton.click()

        await expect(LoginPage.product).toHaveText('PRODUCTS')
        await driver.pause(2000)
        await LoginPage.logout()
    })

    it('login dengan klik tombol problem_user ', async function () {
        await scrollScreen(600, 100)
        await LoginPage.problemUserButton.click()
        await scrollScreen(100, 600)
        await LoginPage.loginButton.click()

        await expect(LoginPage.product).toHaveText('PRODUCTS')
        await driver.pause(2000)
        await LoginPage.logout()
    })

    it('login dengan username yang benar tapi password salah', async function () {
        await LoginPage.login('standard_user', 'alya')
        await expect(LoginPage.errorMessage).toHaveText('Username and password do not match any user in this service.')
    })

    it('login dengan username yang salah tapi password benar', async function () {
        await LoginPage.login('alya_awalia', 'secret_sauce')
        await expect(LoginPage.errorMessage).toHaveText('Username and password do not match any user in this service.')
    })

    it('login dengan username kosong dan password benar', async function () {
        await LoginPage.login('', 'secret_sauce')
        await expect(LoginPage.errorMessage).toHaveText('Username is required')
    })

    it('login dengan password kosong dan username benar', async function () {
        await LoginPage.login('standard_user', '')
        await expect(LoginPage.errorMessage).toHaveText('Password is required')
    })

    it('login dengan password kosong dan username kosong', async function () {
        await LoginPage.login('', '')
        await expect(LoginPage.errorMessage).toHaveText('Username is required')
    })

    it('login dengan setValue problem user', async function () {
        await LoginPage.login('problem_user', 'secret_sauce')
        
        await expect(LoginPage.product).toHaveText('PRODUCTS')
        await driver.pause(2000)
        await LoginPage.logout()
    })

    it('login dengan setValue locked_out_user', async function () {
        await LoginPage.login('locked_out_user', 'secret_sauce')
        
        await expect(LoginPage.errorMessage).toHaveText('Sorry, this user has been locked out.');
    })

    it('login dengan setValue standard user', async function () {
        await LoginPage.login('standard_user', 'secret_sauce')
       
        await expect(LoginPage.product).toHaveText('PRODUCTS')
        await driver.pause(2000)
        await LoginPage.logout()
    })
})

