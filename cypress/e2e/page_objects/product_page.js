export class ProductPage {

    static checkIfProductPageIsOpen(product_name) {
        cy.get('#columns > div.breadcrumb.clearfix').contains(product_name);
    }

    static clickAddQuantity() {
        cy.get('.icon-plus').click();
    }

    static clickAddToCart() {
        cy.get('button').contains("Add to cart").click();
    }

    static clickContinueShopping() {
        cy.get('div.button-container').contains("Continue shopping").click();
        cy.get('#block_top_menu').contains("Women").click();
    }

    static clickProceedToCheckout() {
        cy.get('div.button-container').contains("Proceed to checkout").click();
    }

    static getPrice() {
        return cy.get('#our_price_display');
    }
}