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
        await DaftarProduct.clickletakPetak()
        await expect (DaftarProduct.tombolPlus).toHaveText('+')
    })

    it('mengembalikan tata letak daftar menjadi tata letak petak', async function() {
        await DaftarProduct.clickletakDaftar()
        await expect (DaftarProduct.gambarTas).toBeDisplayed()
    })

    it('user melakukan short item by name Z to A', async function() {
        await DaftarProduct.clickshortBy()
        await DaftarProduct.clickZ_to_A()
        // await scrollScreen(800, 100)
        // await driver.pause(2000)
        // // Scroll ke atas buat mastiin elemen 'Sauce Labs Backpack' terlihat
        // await scrollScreen(0, 0) // scroll ke atas halaman (MASII ERROR!!!)
        // await driver.pause(1000)

        await expect (DaftarProduct.textBajuMerah).toHaveText('Test.allTheThings() T-Shirt (Red)')
    })

    it('user melakukan short item by name A to Z', async function() {
        await DaftarProduct.clickshortBy()
        await DaftarProduct.clickA_to_Z()
        
        await expect (DaftarProduct.textTas).toHaveText('Sauce Labs Backpack')
    })

    it('user melakukan short item by price low to high', async function() {
        await DaftarProduct.clickshortBy()
        await DaftarProduct.clicklowToHigh()
        await expect (DaftarProduct.textHargaLow).toHaveText('$7.99')
    })

    it('user melakukan short item by price high to low', async function() {
        await DaftarProduct.clickshortBy()
        await DaftarProduct.clickhighToLow()
        await expect (DaftarProduct.textHargaHigh).toHaveText('$49.99')
    })

    it('user melakukan short item tetapi cancel', async function() {
        await DaftarProduct.clickshortBy()
        await DaftarProduct.clickcancel()

        await expect (LoginPage.product).toHaveText('PRODUCTS')
    })

    it('user menambahkan product ke keranjang', async function() { 
        await DaftarProduct.clickgambarJaket()
        await scrollScreen(600, 100)
        await driver.pause(2000)
        await DaftarProduct.clickaddToCart()
        await DaftarProduct.clickbackToProduct()
        await expect (DaftarProduct.cart1).toHaveText('1')
     })

     it('user cek keranjang', async function() {
        await DaftarProduct.clickgambarJaket()
        await DaftarProduct.clickcart1()
        await expect (DaftarProduct.textJaket).toHaveText('Sauce Labs Fleece Jacket')
     })

     it('user menghapus keranjang', async function() {
        await DaftarProduct.clickcart1()
        await DaftarProduct.clickremove()
        await expect (DaftarProduct.cart).toBeDisplayed()
     })

     it('user melanjutkan belanja', async function() {
        await DaftarProduct.clickcontinueShop()
        await expect (LoginPage.product).toHaveText('PRODUCTS')
     })

     it('user melakukan checkout barang', async function() {
        await DaftarProduct.clickgambarJaket()
        await scrollScreen(600, 100)
        await driver.pause(2000)
        await DaftarProduct.clickaddToCart()
        await DaftarProduct.clickcart1()
        await scrollScreen(500, 100)
        await DaftarProduct.clickcheckout()
        await expect (DaftarProduct.infoCheckout).toHaveText('CHECKOUT: INFORMATION')

     })

})
