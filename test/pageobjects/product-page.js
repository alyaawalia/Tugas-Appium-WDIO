import { $ } from '@wdio/globals'

class DaftarProduct {

    //selector 
    get letakPetak() { return $('//android.view.ViewGroup[@content-desc="test-Toggle"]/android.widget.ImageView') }
    get letakDaftar() { return $('//android.view.ViewGroup[@content-desc="test-Toggle"]/android.widget.ImageView') }
    get shortBy() { return $('//android.view.ViewGroup[@content-desc="test-Modal Selector Button"]/android.view.ViewGroup/android.view.ViewGroup/android.widget.ImageView') }
    get A_to_Z() { return $('//android.widget.TextView[@text="Name (A to Z)"]') }
    get Z_to_A() { return $('//android.widget.TextView[@text="Name (Z to A)"]') }
    get lowToHigh() { return $('//android.widget.TextView[@text="Price (low to high)"]') }
    get highToLow() { return $('//android.widget.TextView[@text="Price (high to low)"]') }
    get cancel () { return $('//android.widget.TextView[@text="Cancel"]')}
    get gambarJaket() { return $('(//android.view.ViewGroup[@content-desc="test-Item"])[1]/android.view.ViewGroup/android.widget.ImageView') }
    get addToCart() { return $('//android.view.ViewGroup[@content-desc="test-ADD TO CART"]') }
    get backToProduct() { return $('//android.view.ViewGroup[@content-desc="test-BACK TO PRODUCTS"]') }
    get remove() { return $('//android.view.ViewGroup[@content-desc="test-REMOVE"]') }
    get continueShop() { return $('//android.view.ViewGroup[@content-desc="test-CONTINUE SHOPPING"]') }
    get tombolPlus() { return $('//android.widget.TextView[@text="+"]') } 
    get gambarTas() { return $('(//android.view.ViewGroup[@content-desc="test-Item"])[1]/android.view.ViewGroup/android.widget.ImageView')} 
    get textTas() { return $('//android.widget.TextView[@content-desc="test-Item title" and @text="Sauce Labs Backpack"]') }
    get textBajuMerah() { return $('//android.widget.TextView[@content-desc="test-Item title" and @text="Test.allTheThings() T-Shirt (Red)"]') }
    get textHargaLow() { return $('//android.widget.TextView[@content-desc="test-Price" and @text="$7.99"]')}
    get textHargaHigh() { return $('//android.widget.TextView[@content-desc="test-Price" and @text="$49.99"]') }
    get textJaket() { return $('//android.widget.TextView[@text="Sauce Labs Fleece Jacket"]') }
    get cart() { return $('//android.view.ViewGroup[@content-desc="test-Cart"]/android.view.ViewGroup/android.widget.ImageView') }
    get cart1() { return $('//android.widget.TextView[@text="1"]') }
    get checkout() { return $('//android.view.ViewGroup[@content-desc="test-CHECKOUT"]') }
    get infoCheckout() { return $('//android.widget.TextView[@text="CHECKOUT: INFORMATION"]') }

    

    
}

export default new DaftarProduct()