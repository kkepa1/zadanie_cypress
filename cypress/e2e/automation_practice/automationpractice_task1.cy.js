/// <reference types="cypress" />
import { MainPage } from "../page_objects/main_page";
import {LogginPage} from "../page_objects/loggin_page";

context('e-shop go to', () =>{
    let data;
    beforeEach(() => {
        MainPage.openAutomationPracticePage();
        cy.fixture('logginData').then((users) =>{
            data = users;
        })
    })


    describe('sign in', () => {

            let i = 0;
            Cypress._.times(2, () => {
                it('Should Sign in', () => {
                    MainPage.clickSignIn();
                    LogginPage.checkIfLogginPageIsOpen();
                    LogginPage.enterLoginAndPassword(data[Object.keys(data)[i]].email, data[Object.keys(data)[i]].password);
                    LogginPage.clickSignIn();
                    LogginPage.checkIfLogged();
                    i++;
                })
            })
        })
   
})