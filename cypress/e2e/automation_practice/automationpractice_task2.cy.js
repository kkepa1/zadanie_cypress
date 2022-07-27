/// <reference types="cypress" />
import { MainPage } from "../page_objects/main_page";
import {ProductPage} from "../page_objects/product_page";
import {WomenPage} from "../page_objects/women_page";
import {CheckoutPage} from "../page_objects/checkout_page";

context('e-shop go to', () =>{
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



        it('go to basket and check if price is correct', () => {

            cy.get('#our_price_display').invoke('text').as('price');

            ProductPage.clickProceedToCheckout();

            cy.get('#total_product').invoke('text').as('total_price');

            cy.get('@price').then((price) => {
                let price_float = price.match(/[+-]?\d+(\.\d+)?/g).map(function(v) { return parseFloat(v); });
                let new_price = (price_float * 2).toFixed(2);


               cy.get('@total_price').then((total_price) => {

                    expect(total_price).to.contain(new_price);
               })
            });
        })
    })   
})