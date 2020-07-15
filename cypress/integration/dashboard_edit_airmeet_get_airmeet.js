describe('Airmeet Backstage Smoke test', () => {

    it('Edit_airmeet validation', () => {

        cy.visit(Cypress.env('edit_airmeet'));

        //login
        cy.get('.d-inline-block').click()

        //
        cy.get('.auth-choices > .d-flex > .btn').click()

        cy.get('label').type('rajakumar.thakur18@gmail.com')

        Cypress.log(cy.get('label'))


        cy.get('.mr-1').click()
        cy.get('#password').type('testing@123', {force: true})

        cy.get('[data-testid=form] > .btn').click()

        // Post Login- Operation
        cy.get('a > .d-none').click()
        cy.wait(5000)
        cy.get('.btn > .d-none').click()

        //
        cy.get('#airmeets > .sidemenu-item').click()

        //Enter whose session needs to changes
        //cy.visit("https://demo.airmeet.com/airmeets/813f4d10-c1a7-11ea-8984-b5d1b3bf52ec/summary");
        //cy.visit(Cypress.env('url'));
        cy.visit(Cypress.env('edit_airmeet'));

        //const var2= cy.get('.copy_url > p').invoke('text')

        let link_text= cy.get('.copy_url > p')
                .debug()
        let link2= cy.get('.copy_url > p').text()

       //cy.visit("https://demo.airmeet.com/e/751da030-c4d7-11ea-8c5a-cbd79ed81f85");
        //cy.log(cy.wrap(link))
        cy.visit(link2)
       /* console.log(link)

        cy.visit(cy.wrap(link))*/

        /*  cy.get('.copy_url > p').should('be.visible').then(($btn) => {
              let link5= cy.get('.copy_url > p').text()
              cy.log(link5)
              debugger
              cy.visit(                {


                      url: link5
                  }

              )

             // debugger
          })*/

    /*    cy.log(cy.request(Cypress.env('url')))
        cy.request(Cypress.env('url'))

        cy.visit(Cypress.env('url'));
        cy.log(cy.request(Cypress.env('url')))*/



        //cy.visit(cy.get('.copy_url > p').text())

        //let link3 =cy.get('.copy_url > p').attribute('placeholder').should('contain', 'username');
      /*  let link3 =cy.get('.copy_url').attribute('p')
        cy.log(link3)*/


       /* let link2= cy.get('.copy_url > p').invoke('attr', 'text').should('contain', 'demo')

        cy.visit(link2)*/

        //cy.visit(link)


        //cy.wrap(cy.get('.copy_url > p')).invoke('greeting').should('equal', 'bye')

        /*cy.log(var2)
        cy.visit(var2.valueOf())*/


    })

})