describe('Airmeet Backstage Smoke test', () => {

    it('Join using host and validate bottom bar operation"', () => {

        //Calling URL from cypress.json
        cy.visit(Cypress.env('url'));

        //login
        cy.get('.d-inline-block').click()
        cy.get('.auth-choices > .d-flex > .btn').click()
        cy.get('[for="email"]').type('rajakumar.thakur18@gmail.com')
        cy.get('.mr-1').click()
        cy.get('#password').type('testing@123', {force: true})
        cy.get('[data-testid=form] > .btn').click()

        //Backstage page loading time
        cy.wait(18000)
        cy.get('.introjs-skipbutton').should("be.visible").then(($btn) => {
            cy.get('.introjs-skipbutton').click()
        })

        //click on Backstage
        cy.get('.btn > .sc-AxheI').click({force: true})

        cy.wait(10000)

        cy.get('.introjs-skipbutton').click({force: true})


        //start session
        cy.get('#make-session-live-action-btn > .i-holder').click()
        cy.get('span[class="i-holder i-start-live"]').click({force:true})
        cy.get(':nth-child(4) > .modal > .modal-dialog > .modal-content > .modal-body > .action-btns > .btn-primary').click()

        //check starting-session
        cy.get('.starting-count').click()


        cy.get('.i-controls > :nth-child(1)').should("be.visible").then(($btn) => {
            cy.get('.i-controls > :nth-child(1)').should("be.visible")
        })

        //Live Label
        cy.get('.label-live').should("be.visible").then(($btn) => {
            cy.get('.label-live').should("be.visible")
        })

        //video
        cy.get(':nth-child(1) > .i-holder > .icon > use').should("be.visible").then(($btn) => {
            cy.get(':nth-child(1) > .i-holder > .icon > use').should("be.visible")
            cy.get(':nth-child(1) > .i-holder > .icon > use').click({force: true})
            cy.get(':nth-child(1) > .i-holder > .icon > use').click({force: true})
        })

        //mic
        cy.get(':nth-child(2) > .i-holder > .icon > use').should("be.visible").then(($btn) => {
            cy.get(':nth-child(1) > .i-holder > .icon > use').should("be.visible")
            cy.get(':nth-child(2) > .i-holder > .icon > use').click({force: true})

        })


        cy.get('#session-broadcast-control-buttons > :nth-child(4) > .i-holder > .icon > use').should("be.visible").then(($btn) => {
            cy.get('#session-broadcast-control-buttons > :nth-child(4) > .i-holder > .icon > use').click({force: true})
            cy.get('#session-broadcast-control-buttons > :nth-child(4) > .i-holder > .icon > use').click({force: true})
        })

        //smiley
        cy.get('.inner > .i-holder > .icon-c > use').should("be.visible").then(($btn) => {
            cy.get('.inner > .i-holder > .icon-c > use').click({force: true})
            /*cy.get('.inner > .i-holder > .icon-c > use').click({force: true})*/
            cy.get('.item-smile > span').click({force: true})
            cy.get('.inner > .i-holder > .icon-c > use').click({force: true})
            cy.get('.item-smile > span').click({force: true})
            cy.get('.inner > .i-holder > .icon-c > use').click({force: true})
            cy.get('.item-thumb > span').click({force: true})
            cy.get('.inner > .i-holder > .icon-c > use').click({force: true})
            cy.get('.item-clap > span').click({force: true})
            cy.get('.inner > .i-holder > .icon-c > use').click({force: true})
            cy.get('.item-like > span').click({force: true})
            cy.get('.inner > .i-holder > .icon-c > use').click({force: true})
            cy.get('.item-insightfull > span').click({force: true})
            cy.get('.inner > .i-holder > .icon-c > use').click({force: true})
            cy.get('.item-thankyou > span').click({force: true})
        })


        //Yes/No

        cy.get('.vote-toggle > .i-holder > .icon').should("be.visible").then(($btn) => {
            cy.get('.vote-toggle > .i-holder > .icon').click({force: true})
            //cy.get('.vote-toggle > .i-holder > .icon').click({force: true})
            cy.wait(2000)
            //handle check/ uncheck on polling
            cy.get('.vote-holder__box__btn').click()
            cy.get('.vote-toggle > .i-holder > .icon').click()
        })


        //Take a Break - Resume
        cy.contains('Take a Break').should("be.visible").then(($btn) => {
            cy.contains('Take a Break').click()
            cy.get(':nth-child(4) > .modal > .modal-dialog > .modal-content > .modal-body').should("be.visible")
            cy.get(':nth-child(4) > .modal > .modal-dialog > .modal-content > .modal-body > .action-btns > .btn-primary').click()
            cy.wait(5000)

        })

        //Resume
        cy.contains('Resume ').should("be.visible").then(($btn) => {
            cy.contains('Resume ').should("be.visible").click()
            cy.wait(5000)
            cy.get(':nth-child(4) > .light-theme > .modal-dialog > .modal-content > .modal-body > .action-btns > .btn-primary').click()
            cy.wait(25000)
        })


    })

})