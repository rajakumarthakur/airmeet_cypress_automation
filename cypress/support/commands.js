import 'cypress-file-upload';
import "cypress-localstorage-commands";
import "cypress-commands";

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })


/*Cypress.Commands.add('loginAs', (UserEmail, UserPwd) => {
    cy.request({
        method: 'POST',
        url: "/loginWithToken",
        body: {
            user: {
                email: UserEmail,
                password: UserPwd,
            }
        }
    })
        .its('body')
        .then((body) => {
            cy.setLocalStorage("accessToken", body.accessToken);
            cy.setLocalStorage("refreshToken", body.refreshToken);
        });
})*/

/*
beforeEach(() => {
    // before each test, we can automatically preserve the
    // 'session_id' and 'remember_token' cookies. this means they
    // will not be cleared before the NEXT test starts.
    //
    // the name of your cookies will likely be different
    // this is an example
    //Cypress.Cookies.preserveOnce('session_id', 'remember_token')

   /!* Cypress.Cookies.defaults({
        whitelist: 'session_id'
    })

    const clear = Cypress.LocalStorage.clear

    Cypress.LocalStorage.clear = function (keys, ls, rs) {
        // do something with the keys here
        if (keys) {
            return clear.apply(this, arguments)
        }

    }*!/

    //Cypress.Cookies.preserveOnce();
})*/

let LOCAL_STORAGE_MEMORY = {};

Cypress.Commands.add("saveLocalStorageCache", () => {
    Object.keys(localStorage).forEach(key => {
        LOCAL_STORAGE_MEMORY[key] = localStorage[key];
    });
});

Cypress.Commands.add("restoreLocalStorageCache", () => {
    Object.keys(LOCAL_STORAGE_MEMORY).forEach(key => {
        localStorage.setItem(key, LOCAL_STORAGE_MEMORY[key]);
    });
});

Cypress.Commands.add("clearLocalStorageCache", () => {
    localStorage.clear();
    LOCAL_STORAGE_MEMORY = {};
});