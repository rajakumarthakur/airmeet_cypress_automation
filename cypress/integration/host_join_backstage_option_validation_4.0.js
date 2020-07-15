describe('Airmeet Backstage Smoke test', () => {

    it('Login -> Social lounge -> Bckstage -> End Session', () => {

        //cy.visit('https://demo.airmeet.com/e/9fa73710-bc46-11ea-a586-7b25360fdfab')
        //Calling URL from cypress.json
        cy.visit(Cypress.env('url'));

        //login
        cy.get('.d-inline-block').click()
        cy.get('.auth-choices > .d-flex > .btn').click()
        cy.get('[for="email"]').type('rajakumar.thakur18@gmail.com')
        cy.get('.mr-1').click()
        cy.get('#password').type('testing@123', {force: true})
        cy.get('[data-testid=form] > .btn').click()
        cy.saveLocalStorage();

        //Test your mic steup
        cy.wait(25000)
        cy.get('.r-outer > .d-flex > :nth-child(1)').click()

        cy.wait(18000)

   //Social lounge validation
        //Session option
        cy.get('.tn-sessions > .i-holder').should("be.visible").then(($btn) => {
            cy.get('span[title="Sessions"]').should("be.visible")
        })

        // Manage Abuse
        cy.get('.tn-manage > .i-holder').should("be.visible").then(($btn) => {
            cy.get('.tn-manage > .i-holder', { timeout: 1000 }).click()
            cy.contains('Action Taken') // visible
        })

        //Attendees

        cy.get('.tn-attendees > .i-holder').should("be.visible").then(($btn) => {
            cy.get('.tn-attendees > .i-holder').click()
            cy.get('.float-left > h2').should("be.visible")
            cy.get('.float-right > .no-style > .active').should("be.visible").click()
            cy.get('.float-right > .no-style > :nth-child(2)').should("be.visible").click()
        })


        //Chat

        cy.get('.tn-chat > .i-holder').should("be.visible").then(($btn) => {
            cy.get('.tn-chat > .i-holder', { timeout: 1000 }).click()
            cy.contains('Live Chat').should("be.visible")
            cy.contains('Direct').should("be.visible")
        })

        //Questions
        cy.get('.tn-question > .i-holder').should("be.visible").then(($btn) => {
            //Verify text
            cy.get('.tn-question > .i-holder', { timeout: 2000 }).click()
            //cy.contains('Please wait for the session to start to post your question')

        })





   //click on Backstage
        cy.get('.btn > .sc-AxheI').should('be.visible').then(($btn) => {
            cy.get('.btn > .sc-AxheI').click({force: true})
            cy.wait(10000)
        })

     //Closing Popup
        cy.get('[class="close btn-close"]').should("be.visible").then(($btn) => {
            cy.get('[class="close btn-close"]').click({force: true})
        })

        //video
        cy.get(':nth-child(1) > .i-holder > .icon > use').should("be.visible").then(($btn) => {
            cy.get(':nth-child(1) > .i-holder > .icon > use').should("be.visible")
            cy.get(':nth-child(1) > .i-holder > .icon > use').click({force: true})
            cy.get(':nth-child(1) > .i-holder > .icon > use').click({force: true})
        })

        //mic
        cy.get('#session-broadcast-control-buttons > :nth-child(2) > .i-holder > .icon > use').should("be.visible").then(($btn) => {
            cy.get('#session-broadcast-control-buttons > :nth-child(2) > .i-holder > .icon > use').should("be.visible")
            cy.get('#session-broadcast-control-buttons > :nth-child(2) > .i-holder > .icon > use').click({ multiple: true })
            })

    //Social lounge validation
            //Session option
            cy.get('.tn-sessions > .i-holder').should("be.visible").then(($btn) => {
                cy.get('span[title="Sessions"]').should("be.visible")
            })

            // Manage Abuse
            cy.get('.tn-manage > .i-holder').should("be.visible").then(($btn) => {
                cy.get('.tn-manage > .i-holder', {timeout: 1000}).click()
                cy.contains('Action Taken') // visible
            })

            //Attendees

            cy.get('.tn-attendees > .i-holder').should("be.visible").then(($btn) => {
                cy.get('.tn-attendees > .i-holder').click()
                cy.get('.float-left > h2').should("be.visible")
                cy.get('.float-right > .no-style > .active').should("be.visible").click()
                cy.get('.float-right > .no-style > :nth-child(2)').should("be.visible").click()
            })


            //Chat

            cy.get('.tn-chat > .i-holder').should("be.visible").then(($btn) => {
                cy.get('.tn-chat > .i-holder', {timeout: 1000}).click()
                cy.contains('Live Chat').should("be.visible")
                cy.contains('Direct').should("be.visible")
            })

            //Questions
            cy.get('.tn-question > .i-holder').should("be.visible").then(($btn) => {
                //Verify text
                cy.get('.tn-question > .i-holder', {timeout: 2000}).click()
                //cy.contains('Please wait for the session to start to post your question')

            })

            //Hide

            cy.get('.hide-unhide > .i-holder').should("be.visible").then(($btn) => {
                cy.get('.hide-unhide > .i-holder', {timeout: 1000}).click()
                cy.get('.action-btns > .btn-primary').should("be.visible")
                //Visible
                cy.get('.hide-unhide > .i-holder').click({force: true})
                // cancel
                //cy.get('.btn-light-danger', { timeout: 2000 }).click({force: true})
                cy.get('.live-controls > .modal > .modal-dialog > .modal-content > .modal-body > .action-btns > .btn-light-danger').click({force: true})
            })


    //'Start Session'

            //start session
            cy.get('#make-session-live-action-btn > .i-holder').click()
            cy.wait(10000)
            //cy.get('span[class="i-holder i-start-live"]').click({force:true})

            //Click on start session
            cy.get(':nth-child(4) > .light-theme > .modal-dialog > .modal-content > .modal-body > .action-btns > .btn-primary').should("be.visible").then(($btn) => {

                cy.get(':nth-child(4) > .light-theme > .modal-dialog > .modal-content > .modal-body > .action-btns > .btn-primary').click()
                //cy.get(':nth-child(4) > .modal > .modal-dialog > .modal-content > .modal-body > .action-btns > .btn-primary').click()

                //check starting-session
                //cy.get('.starting-count').click()
                cy.get('.starting-count').should("be.visible")
                cy.wait(25000)

                cy.get('[title="End Session"]').should("be.visible").then(($btn) => {
                    cy.get('[title="End Session"]').click({force: true})
                    cy.get(':nth-child(4) > .light-theme > .modal-dialog > .modal-content > .modal-body > .action-btns > .btn-primary').click({force: true})
                    cy.wait(6000)
                })

        //Post end Session

                //Session option
                cy.get('.tn-sessions > .i-holder').should("be.visible").then(($btn) => {
                    cy.get('span[title="Sessions"]').should("be.visible")
                })

                // Manage Abuse
                cy.get('.tn-manage > .i-holder').should("be.visible").then(($btn) => {
                    cy.get('.tn-manage > .i-holder', {timeout: 1000}).click()
                    cy.contains('Action Taken') // visible
                })

                //Attendees

                cy.get('.tn-attendees > .i-holder').should("be.visible").then(($btn) => {
                    cy.get('.tn-attendees > .i-holder').click()
                    cy.get('.float-left > h2').should("be.visible")
                    cy.get('.float-right > .no-style > .active').should("be.visible")
                        .wait(2000)
                        .click()
                    cy.get('.float-right > .no-style > :nth-child(2)').should("be.visible")
                        .wait(2000)
                        .click()
                })


                //Chat

                cy.get('.tn-chat > .i-holder').should("be.visible").then(($btn) => {
                    cy.get('.tn-chat > .i-holder', {timeout: 1000}).click()
                    cy.contains('Live Chat').should("be.visible")
                    cy.contains('Direct').should("be.visible")
                })

                //Questions
                cy.get('.tn-question > .i-holder').should("be.visible").then(($btn) => {
                    //Verify text
                    cy.get('.tn-question > .i-holder', {timeout: 2000}).click()
                    //cy.contains('Please wait for the session to start to post your question')

                })

                //Hide

                cy.get('.hide-unhide > .i-holder').should("be.visible").then(($btn) => {
                    cy.get('.hide-unhide > .i-holder', {timeout: 1000}).click()
                    cy.get('.action-btns > .btn-primary').should("be.visible")
                    //Visible
                    cy.get('.hide-unhide > .i-holder').click({force: true})
                    // cancel
                    //cy.get('.btn-light-danger', { timeout: 2000 }).click({force: true})
                    cy.get('.live-controls > .modal > .modal-dialog > .modal-content > .modal-body > .action-btns > .btn-light-danger').click({force: true})
                })


            })

        })
     it('Exit operation', () => {
         //Exit button
         cy.get('button[title="Exit Airmeet"]').click()
         //star rating
         cy.get(':nth-child(5) > .icon > use').click()
     })
})