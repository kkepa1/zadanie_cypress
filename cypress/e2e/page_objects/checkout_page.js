export class CheckoutPage {

    static checkSum(sum) {
        cy.get('#total_product').contains(sum);
    }
}