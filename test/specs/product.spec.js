import { $, driver, expect } from '@wdio/globals'
import LoginPage from "../pageobjects/loginPage.js"
import scrollScreen from "../../helpers/scrollScreen.js"
import DaftarProduct from "../pageobjects/product-page.js"
import { isDescending, isAscending, isLowToHigh, isHighToLow} from "../../helpers/shorting.js"

describe('FITUR DAFTAR PRODUCT APLIKASI SWAGLAB', function () {
    before('User harus berada pada halaman awal', async function () {
        await LoginPage.login('standard_user', 'secret_sauce')
        await driver.pause(2000)
    })

    after (async function(){
        await driver.reloadSession()
    })

    it('ubah tata letak petak menjadi tata letak daftar', async function() {
        await DaftarProduct.clickletakPetak()
        await expect (DaftarProduct.tombolPlus).toHaveText('+')
    })

    it('mengembalikan tata letak daftar menjadi tata letak petak', async function() {
        await DaftarProduct.clickletakDaftar()
        await expect (DaftarProduct.gambarTas).toBeDisplayed()
    })

    it('user menambahkan product ke keranjang', async function() { 
        await DaftarProduct.clickshortBy()
        await DaftarProduct.clickhighToLow()
        await DaftarProduct.clickgambarJaket()
        await scrollScreen(600, 100)
        await driver.pause(1000)
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
        await expect (DaftarProduct.cart).not.toBeDisplayed()
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

     it('user melakukan short item by name Z to A', async function() {
        await DaftarProduct.clickCancelCheckout()
        await DaftarProduct.clickshortBy()
        await DaftarProduct.clickZ_to_A()
       
        await DaftarProduct.scrollAllCardName()
    
        const productNames = await DaftarProduct.getProductNames()
        console.log('Nama Produk Z ke A :', productNames)
    
        const descending = isDescending(productNames)
        expect(descending).toBe(true)
    })

    it('user melakukan short item by name A to Z', async function() {
        await DaftarProduct.clickshortBy()
        await DaftarProduct.clickA_to_Z()
        //await scrollScreen(100, 600)

        await DaftarProduct.scrollAllCardName()
        
        const names = await DaftarProduct.getProductNames()
        console.log('Nama Produk A ke Z :', names) 
        
        const ascending = isAscending(names)
        expect(ascending).toBe(true)
        
    })

    it('user melakukan short item by price low to high', async function() {
        await DaftarProduct.clickshortBy()
        await DaftarProduct.clicklowToHigh()
        //await scrollScreen(100, 600)

        await DaftarProduct.scrollAllCardName()

        const prices = await DaftarProduct.getProductsPrices()
        console.log('Harga Low to High :', prices) 
        
        const lowprices = isLowToHigh(prices)
        expect(lowprices).toBe(true)
    })

    it('user melakukan short item by price high to low', async function() {
        await DaftarProduct.clickshortBy()
        await DaftarProduct.clickhighToLow()
        //await scrollScreen(100, 600)

        await DaftarProduct.scrollAllCardName()
        
        const prices = await DaftarProduct.getProductsPrices()
        console.log('High to Low :', prices) 
        
        const highprices = isHighToLow(prices)
        expect(highprices).toBe(true)
    })

    it('user melakukan short item tetapi cancel', async function() {
        await DaftarProduct.clickshortBy()
        await DaftarProduct.clickcancel()

        await expect (LoginPage.product).toHaveText('PRODUCTS')
    })
})
