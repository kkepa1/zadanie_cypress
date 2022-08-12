export class CheckoutPage {

    static checkIfIsOpen() {
        cy.get('#cart_title').should('contain', 'Shopping-cart summary');
    }

    static checkSum(total_price, new_price) {
        expect(total_price).to.contain(new_price);
    }

    static getTotalPrice () {
        let price = Cypress.$(`#total_product`);
        console.log(price[0].innerHTML.trim());
        return price[0].innerHTML.trim();
    }
}