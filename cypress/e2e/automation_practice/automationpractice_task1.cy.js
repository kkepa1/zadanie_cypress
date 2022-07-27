/// <reference types="cypress" />
import { MainPage } from "../page_objects/main_page";
import {LogginPage} from "../page_objects/loggin_page";

context('e-shop go to', () =>{
    beforeEach(() => {
        MainPage.openAutomationPracticePage();
    })


    describe('sign in', () => {

        const logginData = require("/logginData.json");

        for (let i = 0; i < logginData.length; i++){
            it(i + '. should Sign in', () => {
                
                MainPage.clickSignIn();
                LogginPage.checkIfLogginPageIsOpen();
                LogginPage.enterLoginAndPassword(logginData[i].login, logginData[i].password);
                LogginPage.clickSignIn();
                LogginPage.checkIfLogged();
                
            })
        }

    }) 
   
})