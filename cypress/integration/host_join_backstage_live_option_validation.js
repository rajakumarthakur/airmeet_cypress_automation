describe('Airmeet Backstage Smoke test', () => {

    it('Join using host and validate operation"', () => {

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

        //Go Live Button
        //Skip handing part
        //Wait for info message to Appear
        //Go Live Button -> followed by Click yes
        cy.contains('Go Live').click().should('be.visible')
            //yes
        cy.get('.action-btns > .btn-primary').click()

       /* //Test your mic steup
        cy.wait(25000)
        cy.get('.r-outer > .d-flex > :nth-child(1)').click()*/

        //cy.get('.action-btns > .btn-primary').click()


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
        cy.wait(25000)

        //Session option
        cy.get('.tn-sessions > .i-holder').should("be.visible").then(($btn) => {
            cy.get('span[title="Sessions"]').should("be.visible")
        })

        // click on Raise Hand
        // Hand raise
        cy.get('.handRaisedButton > .icon').should("be.visible").then(($btn) => {
            cy.get('.handRaisedButton > .icon').click()
            cy.contains('No hands raised').should("be.visible")
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

        //Questions
        cy.get('.tn-question > .i-holder').should("be.visible").then(($btn) => {
            //Verify text
            cy.get('.tn-question > .i-holder', { timeout: 2000 }).click()
            //cy.contains('Please wait for the session to start to post your question')

        })
        //Chat

        cy.get('.tn-chat > .i-holder').should("be.visible").then(($btn) => {
            cy.get('.tn-chat > .i-holder', { timeout: 1000 }).click()
            cy.contains('Live Chat').should("be.visible")
            cy.contains('Direct').should("be.visible")
        })


        //Hide

        cy.get('.hide-unhide > .i-holder').should("be.visible").then(($btn) => {
            cy.get('.hide-unhide > .i-holder', { timeout: 1000 }).click()
            cy.get('.action-btns > .btn-primary').should("be.visible")
            //Visible
            cy.get('.hide-unhide > .i-holder').click()
            // cancel
            cy.get('.btn-light-danger', { timeout: 2000 }).click()
        })


    })

    it('Session- > Raise hand', () => {
        //Session option
        cy.get('.tn-sessions > .i-holder').should("be.visible").then(($btn) => {
            cy.get('span[title="Sessions"]').should("be.visible")
        })

        // Hand raise
        cy.get('.handRaisedButton > .icon').should("be.visible").then(($btn) => {
            cy.get('.handRaisedButton > .icon').click()
            cy.contains('No hands raised').should("be.visible")
        })

    })

    it('Session- > Manage Abuse', () => {
        //Session option
        cy.get('.tn-sessions > .i-holder').should("be.visible").then(($btn) => {
            cy.get('span[title="Sessions"]').should("be.visible")
        })

        // Manage Abuse
        cy.get('.tn-manage > .i-holder').should("be.visible").then(($btn) => {
            cy.get('.tn-manage > .i-holder', { timeout: 1000 }).click()
            cy.contains('Action Taken') // visible
        })

    })

    it('Manage Abuse- > Raise hand ', () => {
        // Manage Abuse
        cy.get('.tn-manage > .i-holder').should("be.visible").then(($btn) => {
            cy.get('.tn-manage > .i-holder', { timeout: 1000 }).click()
            cy.contains('Action Taken') // visible
        })

        // Hand raise
        cy.get('.handRaisedButton > .icon').should("be.visible").then(($btn) => {
            cy.get('.handRaisedButton > .icon').click()
            cy.contains('No hands raised').should("be.visible")
        })

    })

    it('Raise hand -> Manage Abuse', () => {
        // Hand raise
        cy.get('.handRaisedButton > .icon').should("be.visible").then(($btn) => {
            cy.get('.handRaisedButton > .icon').click()
            cy.contains('No hands raised').should("be.visible")
        })

        // Manage Abuse
        cy.get('.tn-manage > .i-holder').should("be.visible").then(($btn) => {
            cy.get('.tn-manage > .i-holder', { timeout: 1000 }).click()
            cy.contains('Action Taken') // visible
        })

    })

    it('Manage Abuse- > Session ', () => {
        // Manage Abuse
        cy.get('.tn-manage > .i-holder').should("be.visible").then(($btn) => {
            cy.get('.tn-manage > .i-holder', { timeout: 1000 }).click()
            cy.contains('Action Taken') // visible
        })

        //Session option
        cy.get('.tn-sessions > .i-holder').should("be.visible").then(($btn) => {
            cy.get('span[title="Sessions"]').should("be.visible")
        })

    })


    it('Session -> Attendee', () => {
        //Session option
        cy.get('.tn-sessions > .i-holder').should("be.visible").then(($btn) => {
            cy.get('span[title="Sessions"]').should("be.visible")
        })

        //Attendees

        cy.get('.tn-attendees > .i-holder').should("be.visible").then(($btn) => {
            cy.get('.tn-attendees > .i-holder').click()
            cy.get('.float-left > h2').should("be.visible")
            cy.get('.float-right > .no-style > .active').should("be.visible").click()
            cy.get('.float-right > .no-style > :nth-child(2)').should("be.visible").click()
        })

    })

    it('Attendee -> Raise hand', () => {
        //Attendees

        cy.get('.tn-attendees > .i-holder').should("be.visible").then(($btn) => {
            cy.get('.tn-attendees > .i-holder').click()
            cy.get('.float-left > h2').should("be.visible")
            cy.get('.float-right > .no-style > .active').should("be.visible").click()
            cy.get('.float-right > .no-style > :nth-child(2)').should("be.visible").click()
        })

        // Hand raise
        cy.get('.handRaisedButton > .icon').should("be.visible").then(($btn) => {
            cy.get('.handRaisedButton > .icon').click()
            cy.contains('No hands raised').should("be.visible")
        })

    })

    it('Raise hand -> Attendee', () => {
        // Hand raise
        cy.get('.handRaisedButton > .icon').should("be.visible").then(($btn) => {
            cy.get('.handRaisedButton > .icon').click()
            cy.contains('No hands raised').should("be.visible")
        })

        //Attendees

        cy.get('.tn-attendees > .i-holder').should("be.visible").then(($btn) => {
            cy.get('.tn-attendees > .i-holder').click()
            cy.get('.float-left > h2').should("be.visible")
            cy.get('.float-right > .no-style > .active').should("be.visible").click()
            cy.get('.float-right > .no-style > :nth-child(2)').should("be.visible").click()
        })

    })

    it('Questions -> Raise hand', () => {
        //Questions
        cy.get('.tn-question > .i-holder').should("be.visible").then(($btn) => {
            //Verify text
            cy.get('.tn-question > .i-holder', {timeout: 2000}).click()
            //cy.contains('Please wait for the session to start to post your question')

        })

        // Hand raise
        cy.get('.handRaisedButton > .icon').should("be.visible").then(($btn) => {
            cy.get('.handRaisedButton > .icon').click()
            cy.contains('No hands raised').should("be.visible")
        })
     })

    it('Attendee -> Manage Abuse', () => {
        //Session option
        cy.get('.tn-sessions > .i-holder').should("be.visible").then(($btn) => {
            cy.get('span[title="Sessions"]').should("be.visible")
        })

        // Manage Abuse

        cy.get('.tn-manage > .i-holder').should("be.visible").then(($btn) => {
            cy.get('.tn-manage > .i-holder', { timeout: 1000 }).click()
            cy.contains('Action Taken') // visible
        })

    })

    it('Manage Abuse -> Attendees', () => {
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
    })

    it('Attendees -> Session', () => {
        //Attendees

        cy.get('.tn-attendees > .i-holder').should("be.visible").then(($btn) => {
            cy.get('.tn-attendees > .i-holder').click()
            cy.get('.float-left > h2').should("be.visible")
            cy.get('.float-right > .no-style > .active').should("be.visible").click()
            cy.get('.float-right > .no-style > :nth-child(2)').should("be.visible").click()
        })

        // Manage Abuse

        cy.get('.tn-manage > .i-holder').should("be.visible").then(($btn) => {
            cy.get('.tn-manage > .i-holder', { timeout: 1000 }).click()
            cy.contains('Action Taken') // visible
        })

    })

    it('Session -> Questions', () => {
        //Session option
        cy.get('.tn-sessions > .i-holder').should("be.visible").then(($btn) => {
            cy.get('span[title="Sessions"]').should("be.visible")
        })

        //Questions
        cy.get('.tn-question > .i-holder').should("be.visible").then(($btn) => {
            //Verify text
            cy.get('.tn-question > .i-holder', { timeout: 2000 }).click()
            //cy.contains('Please wait for the session to start to post your question')

        })

    })

    it('Questions -> Chat', () => {
        //Questions
        cy.get('.tn-question > .i-holder').should("be.visible").then(($btn) => {
            //Verify text
            cy.get('.tn-question > .i-holder', {timeout: 2000}).click()
            //cy.contains('Please wait for the session to start to post your question')

        })

        //Chat
        cy.get('.tn-chat > .i-holder').should("be.visible").then(($btn) => {
            cy.get('.tn-chat > .i-holder', { timeout: 1000 }).click()
            cy.contains('Live Chat').should("be.visible")
            cy.contains('Direct').should("be.visible")
        })


    })


    it('Questions -> Manage Abuse', () => {
            //Questions
            cy.get('.tn-question > .i-holder').should("be.visible").then(($btn) => {
                //Verify text
                cy.get('.tn-question > .i-holder', {timeout: 2000}).click()
                // cy.contains('Please wait for the session to start to post your question')
            })

                // Manage Abuse

                cy.get('.tn-manage > .i-holder').should("be.visible").then(($btn) => {
                    cy.get('.tn-manage > .i-holder', { timeout: 1000 }).click()
                    cy.contains('Action Taken') // visible
                })
        })

    it('Questions -> Attendee', () => {
            //Questions
            cy.get('.tn-question > .i-holder').should("be.visible").then(($btn) => {
                //Verify text
                cy.get('.tn-question > .i-holder', {timeout: 2000}).click()
                // cy.contains('Please wait for the session to start to post your question')
            })
                //Attendees

                cy.get('.tn-attendees > .i-holder').should("be.visible").then(($btn) => {
                    cy.get('.tn-attendees > .i-holder').click()
                    cy.get('.float-left > h2').should("be.visible")
                    cy.get('.float-right > .no-style > .active').should("be.visible").click()
                    cy.get('.float-right > .no-style > :nth-child(2)').should("be.visible").click()
                })
    })

    it('Session -> chat', () => {
        //Session option
        cy.get('.tn-sessions > .i-holder').should("be.visible").then(($btn) => {
            cy.get('span[title="Sessions"]').should("be.visible")
        })

        //Chat

        cy.get('.tn-chat > .i-holder').should("be.visible").then(($btn) => {
            cy.get('.tn-chat > .i-holder', { timeout: 1000 }).click()
            cy.contains('Live Chat').should("be.visible")
            cy.contains('Direct').should("be.visible")
        })

    })


    it('Manage Abuse => Hide/Unhide', () => {
        // Manage Abuse

        cy.get('.tn-manage > .i-holder').should("be.visible").then(($btn) => {
            cy.get('.tn-manage > .i-holder', { timeout: 1000 }).click()
            cy.contains('Action Taken') // visible
        })

        //Hid
        cy.get('.hide-unhide > .i-holder').should("be.visible").then(($btn) => {
            cy.get('.hide-unhide > .i-holder', { timeout: 1000 }).click()
            cy.get('.action-btns > .btn-primary').should("be.visible")
            //Visible
            cy.get('.hide-unhide > .i-holder').click()
            // cancel
            cy.get('.btn-light-danger', { timeout: 2000 }).click()
        })

    })

    it('Chat => manage Abuse', () => {
        //Chat

        cy.get('.tn-chat > .i-holder').should("be.visible").then(($btn) => {
            cy.get('.tn-chat > .i-holder', { timeout: 1000 }).click()
            cy.contains('Live Chat').should("be.visible")
            cy.contains('Direct').should("be.visible")
        })

        // Manage Abuse

        cy.get('.tn-manage > .i-holder').should("be.visible").then(($btn) => {
            cy.get('.tn-manage > .i-holder', { timeout: 1000 }).click()
            cy.contains('Action Taken') // visible
        })
    })


    it('Exit operation', () => {
        //Exit button
        cy.get('button[title="Exit Airmeet"]').click()
        //star rating
        cy.get(':nth-child(5) > .icon > use').click()
    })
})