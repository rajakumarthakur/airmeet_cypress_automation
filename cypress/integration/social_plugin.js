describe('Airmeet Backstage Smoke test', () => {

    // mail id: cypressautomation123  password: Cypress@123
    // Same as linkedin login with gmail account

    it('Social Plugin', () => {

        cy.visit('https://demo.airmeet.com/community-manager/4236b770-e72f-4377-a7aa-1320deff9314')

        //login
        //cy.get('.d-inline-block').click()
        //cy.get('.auth-choices > .d-flex > .btn').click()



        const var1= cy.get('.banner-content > .btn-outer > .btn').invoke('text')

        cy.log(var1)


        const var2= cy.get('.banner-content > h1').invoke('text')
        cy.log(var2)

        /*const sessionStorage= cy.window().its('sessionStorage')
        cy.log(sessionStorage)*/

        /*cy.get('.modal-body').should("be.visible").then(($btn) => {
           // cy.get('[title="End Session"]').click({force: true})
           // cy.get(':nth-child(4) > .light-theme > .modal-dialog > .modal-content > .modal-body > .action-btns > .btn-primary').click({force: true})

            cy.get('.btn-google').click()







            cy.wait(6000)
        })*/


    })
})