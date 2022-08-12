/// <reference types="cypress" />
import { MainPage } from "../page_objects/main_page";
import {ProductPage} from "../page_objects/product_page";
import {WomenPage} from "../page_objects/women_page";
import {CheckoutPage} from "../page_objects/checkout_page";

context('e-shop go to', () =>{
    let total;
    before(() => {
        MainPage.openAutomationPracticePage();
    })

    describe('add products to basket and check their price', () => {


        it('enter women category and get blouse', () => {

            MainPage.clickCategory("Women");
            WomenPage.checkIfWomenCategoryIsOpen();
            WomenPage.clickOnProduct("Faded Short Sleeve T-shirts");
        })

        it('add 2 blouses', () => {

            ProductPage.checkIfProductPageIsOpen("Faded Short Sleeve T-shirts");
            ProductPage.clickAddQuantity();

            ProductPage.clickAddToCart();
            cy.wait(5000);
            ProductPage.clickAddToCart();
        })



        it('get product price and go to checkout', () => {

            //bierze price ze strony z produktem
            let price = ProductPage.getPrice();
            total = Number(price.substring(1)) *2;

            //idzie do basket
            ProductPage.clickProceedToCheckout();

        })

        it('go to basket and check if price is correct', () => {

            CheckoutPage.checkIfIsOpen();
            //bierze total price z basketu
            let total_price = CheckoutPage.getTotalPrice();

            CheckoutPage.checkSum(total_price, total);
        })
    })
})