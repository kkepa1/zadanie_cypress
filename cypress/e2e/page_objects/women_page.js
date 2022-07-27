export class WomenPage {

    static checkIfWomenCategoryIsOpen() {
        cy.get('.navigation_page').contains("Women")
    }

    static clickOnProduct(product_name) {
        cy.get('.product-name').contains(product_name).click();
    }
}