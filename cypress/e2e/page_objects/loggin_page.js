export class LogginPage {

    static checkIfLogginPageIsOpen() {
        cy.get('.navigation_page').should('contain', "Authentication");
    }

    static enterLoginAndPassword(email, password) {
        cy.get('#email').type(email).should('have.value', email);
        cy.get('#passwd').type(password).should('have.value', password);
    }

    static clickSignIn() {
        cy.get('#SubmitLogin > span').contains("Sign in").click();
    }

    static checkIfLogged() {
        cy.get('.navigation_page').should('contain', "My account");
    }
}