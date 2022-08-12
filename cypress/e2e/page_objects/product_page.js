export class ProductPage {

    static checkIfProductPageIsOpen(product_name) {
        cy.get('#columns > div.breadcrumb.clearfix').should('contain', product_name);
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
        let price = Cypress.$(`#our_price_display`);
        console.log(price[0].innerHTML.trim());
        return price[0].innerHTML.trim();
    }
}