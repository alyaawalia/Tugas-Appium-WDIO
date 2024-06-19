import { $, driver, expect } from '@wdio/globals'
import LoginPage from "../pageobjects/loginPage.js"
import scrollScreen from "../../helpers/scrollScreen.js"
import DaftarProduct from "../pageobjects/product-page.js"

describe('FITUR DAFTAR PRODUCT APLIKASI SWAGLAB', function () {
    before('User harus berada pada halaman awal', async function () {
        await LoginPage.login('standard_user', 'secret_sauce')
        await driver.pause(2000)
    })

    it('ubah tata letak petak menjadi tata letak daftar', async function() {
        await DaftarProduct.letakPetak.click()
        await expect (DaftarProduct.tombolPlus).toHaveText('+')
    })

    it('mengembalikan tata letak daftar menjadi tata letak petak', async function() {
        await DaftarProduct.letakDaftar.click()
        await expect (DaftarProduct.gambarTas).toBeDisplayed()
    })

    it('user melakukan short item by name Z to A', async function() {
        await DaftarProduct.shortBy.click()
        await DaftarProduct.Z_to_A.click()
        // await scrollScreen(800, 100)
        // await driver.pause(2000)
        // // Scroll ke atas buat mastiin elemen 'Sauce Labs Backpack' terlihat
        // await scrollScreen(0, 0) // scroll ke atas halaman (MASII ERROR!!!)
        // await driver.pause(1000)

        await expect (DaftarProduct.textBajuMerah).toHaveText('Test.allTheThings() T-Shirt (Red)')
    })

    it('user melakukan short item by name A to Z', async function() {
        await DaftarProduct.shortBy.click()
        await DaftarProduct.A_to_Z.click()
        
        await expect (DaftarProduct.textTas).toHaveText('Sauce Labs Backpack')
    })

    it('user melakukan short item by price low to high', async function() {
        await DaftarProduct.shortBy.click()
        await DaftarProduct.lowToHigh.click()
        await expect (DaftarProduct.textHargaLow).toHaveText('$7.99')
    })

    it('user melakukan short item by price high to low', async function() {
        await DaftarProduct.shortBy.click()
        await DaftarProduct.highToLow.click()
        await expect (DaftarProduct.textHargaHigh).toHaveText('$49.99')
    })

    it('user melakukan short item tetapi cancel', async function() {
        await DaftarProduct.shortBy.click()
        await DaftarProduct.cancel.click()

        await expect (LoginPage.product).toHaveText('PRODUCTS')
    })

    it('user menambahkan product ke keranjang', async function() { 
        await DaftarProduct.gambarJaket.click()
        await scrollScreen(600, 100)
        await driver.pause(2000)
        await DaftarProduct.addToCart.click()
        await DaftarProduct.backToProduct.click()
        await expect (DaftarProduct.cart1).toHaveText('1')
     })

     it('user cek keranjang', async function() {
        await DaftarProduct.gambarJaket.click()
        await DaftarProduct.cart1.click()
        await expect (DaftarProduct.textJaket).toHaveText('Sauce Labs Fleece Jacket')
     })

     it('user menghapus keranjang', async function() {
        await DaftarProduct.cart1.click()
        await DaftarProduct.remove.click()
        await expect (DaftarProduct.cart).toBeDisplayed()
     })

     it('user melanjutkan belanja', async function() {
        await DaftarProduct.continueShop.click()
        await expect (LoginPage.product).toHaveText('PRODUCTS')
     })

     it('user melakukan checkout barang', async function() {
        await DaftarProduct.gambarJaket.click()
        await scrollScreen(600, 100)
        await driver.pause(2000)
        await DaftarProduct.addToCart.click()
        await DaftarProduct.cart1.click()
        await scrollScreen(500, 100)
        await DaftarProduct.checkout.click()
        await expect (DaftarProduct.infoCheckout).toHaveText('CHECKOUT: INFORMATION')

     })

})
