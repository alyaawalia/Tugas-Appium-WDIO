// import { $, driver, expect } from '@wdio/globals'
// import scrollScreen from '../../helpers/scrollScreen.js'

// describe('FITUR LOGIN APLIKASI SWAGLAB', function () {
//     it ('scroll ke atas bawah', async function () {
//         await scrollScreen(600, 100)
//         await scrollScreen(100, 600)

//         await driver.pause(2000)
//     })

//     it('cek tombol standard_user untuk mengisi form login', async function () {
//         const usernameInput = await $('~test-Username')
//         const standardUserButton = await $('//android.widget.TextView[@text="standard_user"]')

//         await scrollScreen(1000, 100)
//         await standardUserButton.click()
//         await scrollScreen(100, 1000)

//         expect(usernameInput).toHaveValue('standard_user')
//     })

//     it('cek tombol locked_out_user untuk mengisi form login', async function () {
//         const usernameInput = await $('~test-Username')
//         const lockUserButton = await $('//*[@content-desc="test-locked_out_user"]')

//         await scrollScreen(1000, 100)
//         await lockUserButton.click()
//         await scrollScreen(100, 1000)

//         expect(usernameInput).toHaveValue('locked_out_user')
//     })

//     it('cek tombol problem_user untuk mengisi form login', async function () {
//         const usernameInput = await $('~test-Username')
//         const problemUserButton = await $('//*[@content-desc="test-problem_user"]')

//         await scrollScreen(1000, 100)
//         await problemUserButton.click()
//         await scrollScreen(100, 1000)

//         expect(usernameInput).toHaveValue('problem_user')
//     })

//     it('login dengan klik tombol locked_out_user untuk mengisi form login', async function () {
//         const lockUserButton = await $('//*[@content-desc="test-locked_out_user"]')
//         const loginButton = await $('~test-LOGIN')
//         const errorMessage = await $('//*[@content-desc="test-Error message"]/android.widget.TextView')

//         await scrollScreen(1000, 100)
//         await lockUserButton.click()
//         await scrollScreen(100, 1000)
//         await loginButton.click()

//         await expect(errorMessage).toHaveText('Sorry, this user has been locked out.')
//     })

//     it('login dengan klik tombol standard_user untuk mengisi form login', async function () {
//         const standardUserButton = await $('//*[@content-desc="test-standard_user"]')
//         const loginButton = await $('~test-LOGIN')
//         const loginBerhasil = await $('//android.widget.TextView[@text="PRODUCTS"]') //Inspec si kata productnya atau yg mau di expect

//         await scrollScreen(1000, 100)
//         await standardUserButton.click()
//         await scrollScreen(100, 1000)
//         await loginButton.click()

//         //klik menu
//         const menu = $('//android.view.ViewGroup[@content-desc="test-Menu"]')
//         menu.click()
        
//         // Klik tombol logout
//         const logoutButton = $('//android.widget.TextView[@text="LOGOUT"]')
//         logoutButton.click()

//         await expect(loginBerhasil).toHaveText('PRODUCTS')
//     })

//     it('login dengan klik tombol problem_user untuk mengisi form login', async function () {
//         const problemUserButton = await $('//*[@content-desc="test-problem_user"]')
//         const loginButton = await $('~test-LOGIN')
//         const loginBerhasil = await $('//android.widget.TextView[@text="PRODUCTS"]')

//         await scrollScreen(1000, 100)
//         await problemUserButton.click()
//         await scrollScreen(100, 1000)
//         await loginButton.click()

//         //klik menu
//         const menu = $('//android.view.ViewGroup[@content-desc="test-Menu"]')
//         menu.click()
        
//         // Klik tombol logout
//         const logoutButton = $('//android.widget.TextView[@text="LOGOUT"]')
//         logoutButton.click()

//         await expect(loginBerhasil).toHaveText('PRODUCTS')
//     })

//     it('login dengan username yang benar tapi password salah',  async function () {
//         const usernameInput = await $('~test-Username')
//         const passwordInput = await $('~test-Password')
//         const loginButton = await $('~test-LOGIN')
//         const errorMessage = await $('//*[@content-desc="test-Error message"]/android.widget.TextView')

//         await usernameInput.setValue('standard_user')
//         await passwordInput.setValue('alya')
//         await loginButton.click()

//         await expect(errorMessage).toHaveText('Username and password do not match any user in this service.')
//     })

//     it('login dengan username yang salah tapi password benar',  async function () {
//         const usernameInput = await $('~test-Username')
//         const passwordInput = await $('~test-Password')
//         const loginButton = await $('~test-LOGIN')
//         const errorMessage = await $('//*[@content-desc="test-Error message"]/android.widget.TextView')

//         await usernameInput.setValue('alya_awalia')
//         await passwordInput.setValue('secret_sauce')
//         await loginButton.click()

//         await expect(errorMessage).toHaveText('Username and password do not match any user in this service.')
//     })

//     it('login dengan username kosong dan password benar',  async function () {
//         const usernameInput = await $('~test-Username')
//         const passwordInput = await $('~test-Password')
//         const loginButton = await $('~test-LOGIN')
//         const errorMessage = await $('//*[@content-desc="test-Error message"]/android.widget.TextView')

//         await usernameInput.setValue('')
//         await passwordInput.setValue('secret_sauce')
//         await loginButton.click()

//         await expect(errorMessage).toHaveText('Username is required')
//     })

//     it('login dengan password kosong dan username benar',  async function () {
//         const usernameInput = await $('~test-Username')
//         const passwordInput = await $('~test-Password')
//         const loginButton = await $('~test-LOGIN')
//         const errorMessage = await $('//*[@content-desc="test-Error message"]/android.widget.TextView')

//         await usernameInput.setValue('standard_user')
//         await passwordInput.setValue('')
//         await loginButton.click()

//         await expect(errorMessage).toHaveText('Password is required')
//     })

//     it('login dengan password kosong dan username kosong',  async function () {
//         const usernameInput = await $('~test-Username')
//         const passwordInput = await $('~test-Password')
//         const loginButton = await $('~test-LOGIN')
//         const errorMessage = await $('//*[@content-desc="test-Error message"]/android.widget.TextView')

//         await usernameInput.setValue('')
//         await passwordInput.setValue('')
//         await loginButton.click()

//         await expect(errorMessage).toHaveText('Username is required')
//     })

//     it('login dengan setValue standard user',  async function () {
//         const usernameInput = await $('~test-Username')
//         const passwordInput = await $('~test-Password')
//         const loginButton = await $('~test-LOGIN')
//         const loginBerhasil = await $('//android.widget.TextView[@text="PRODUCTS"]') //Inspec si kata productnya atau yg mau di expect

//         await usernameInput.setValue('standard_user')
//         await passwordInput.setValue('secret_sauce')
//         await loginButton.click()

//         //klik menu
//         const menu = $('//android.view.ViewGroup[@content-desc="test-Menu"]')
//         menu.click()
        
//         // Klik tombol logout
//         const logoutButton = $('//android.widget.TextView[@text="LOGOUT"]')
//         logoutButton.click()

//         await expect(loginBerhasil).toHaveText('PRODUCTS')
//     })

//     it('login dengan setValue problem user',  async function () {
//         const usernameInput = await $('~test-Username')
//         const passwordInput = await $('~test-Password')
//         const loginButton = await $('~test-LOGIN')
//         const loginBerhasil = await $('//android.widget.TextView[@text="PRODUCTS"]') //Inspec si kata productnya atau yg mau di expect

//         await usernameInput.setValue('problem_user')
//         await passwordInput.setValue('secret_sauce')
//         await loginButton.click()

//         //klik menu
//         const menu = $('//android.view.ViewGroup[@content-desc="test-Menu"]')
//         menu.click()
        
//         // Klik tombol logout
//         const logoutButton = $('//android.widget.TextView[@text="LOGOUT"]')
//         logoutButton.click()

//         await expect(loginBerhasil).toHaveText('PRODUCTS')
//     })
// })