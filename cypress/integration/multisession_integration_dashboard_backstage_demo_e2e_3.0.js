describe('integration_dashboard_backstage_e2e', () => {

    beforeEach(() => {
        cy.restoreLocalStorageCache();
        cy.on('uncaught:exception', (err) => {
            expect(err.message).to.include('Ignoring error for now');
            return false;
        });
    });

    afterEach(() => {
        cy.saveLocalStorageCache();
    });


    it('Go to Airmeet and register single Session event', () => {


        //cy.visit('https://www.airmeet.com/community-manager/ab8b8769-69f3-4a7e-ba5e-1d45c8929334')
        cy.visit(Cypress.env('demo.url'));
        //cy.title('Airmeet: Testing_Security')

        //login
        cy.get('.d-inline-block').click()
        cy.get('.auth-choices > .d-flex > .btn').click()
        cy.get('label').type('rajakumar.thakur18@gmail.com')

        Cypress.log(cy.get('label'))

        //password
        cy.get('.mr-1').click()
        cy.get('#password').type('testing@123', {force: true})

        cy.get('[data-testid=form] > .btn').click()

        // Post Login- Operation
        cy.get('a > .d-none').click()
        cy.wait(5000)
        cy.get('.btn > .d-none').click()

        //Single Session Airmeet
        /* cy.get('.no-style > :nth-child(1) > .btn-group > .dropdown-menu > :nth-child(1)').click()
         cy.get('.cm-dashboard').click({force: true})*/

        //Single Overview
        cy.get('.no-style > :nth-child(1) > .btn-group > .dropdown-menu > :nth-child(1)').click()


        //Create an airmeet

        cy.wait(2000)

        cy.get('#name').type('test_airmeet')

        cy.get('#description').type('test')

        cy.get(':nth-child(2) > .inner').click()

        cy.get('.form-btn > .btn').click()

        cy.contains('Create this Airmeet').click()



        //Adding details now
        cy.contains('Add details now').click()
        cy.get('button[class="btn btn-primary"]').first().click()
        cy.wait(3000)
        //click on Next

        cy.get('button[class="btn btn-primary"]').click()
        // Adding Speakers

        cy.get('#add-speaker > span')

        cy.get('#name').type('test user 1')
        cy.get('#email').type('rajathakur@airmeet.com')
        cy.get('#organisation').type('Airmeet')
        cy.get('#designation').type('Engineer')
        cy.get('#city').type('New Delhi')
        cy.get('#country').type('India')
        cy.get('#bio').type('Testing Single session')
        cy.get('button[class="btn btn-primary text-capitalize"]').click()

        // next part

        cy.get('button[class="btn btn-primary"]').click()
        cy.get('.add-speaker').click()

        //Adding Session
        cy.get('#name').type('Adding Session #2', {force:true})
        //Enter Time

//cy.get('#summary').type('Session #2')

        cy.get('button[class="btn btn-primary"]').click()
        cy.wait(2000)

//click Add-more details
        cy.get('button[class="btn btn-primary"]').click()
        cy.wait(2000)

//update and share airmeet
        //cy.get('button[class="btn btn-primary"]').click()
        cy.get('.form-btn > .btn').click()
        cy.wait(2000)


        cy.get('.copy_url > p').then(($btn) => {
            const link_text = $btn.text()
            cy.visit(link_text)

        })

      /*  cy.wait(10000)
            .debug()
        //Cancel
        //cy.get('button').click({ position: 'topLeft' })*!/
        //close button working
        cy.get('button[class="close btn-close"]').click({force:true}, {multiple:true})*/

    })

    it('Go Live', () => {

        cy.wait(10000)

        cy.contains('Go Live').should("be.visible").then(($btn) => {
            cy.contains('Go Live').click({force: true})
            //yes
            cy.get('.action-btns > .btn-primary').click()
        })


        //Test your mic steup
        cy.wait(15000)
        cy.get('.r-outer > .d-flex > :nth-child(1)').click()


    })

    it('Social lounge validation', () => {

        cy.wait(8000)

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

    })

    it('Go to backstage', () => {

        //click on Backstage
        cy.get('.btn > .sc-AxheI').should('be.visible').then(($btn) => {
            cy.get('.btn > .sc-AxheI').click({force: true})
            cy.wait(10000)
        })



        /*  cy.get('.introjs-skipbutton').should("be.visible").then(($btn) => {
            cy.get('.introjs-skipbutton').click({force: true})
        })*/



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

    })

    it('Backstage validation', () => {

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

    })

    it('Live session', () => {

        cy.get('span[class="i-holder i-start-live"]').click({force:true})
        cy.get(':nth-child(4) > .modal > .modal-dialog > .modal-content > .modal-body > .action-btns > .btn-primary').click()

        //check starting-session
        cy.get('.starting-count').click()
        cy.wait(25000)


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
            cy.get('.hide-unhide > .i-holder').click({force: true})
            // cancel
            // cy.get('.btn-light-danger', { timeout: 2000 }).click({force: true})
            cy.get('.live-controls > .modal > .modal-dialog > .modal-content > .modal-body > .action-btns > .btn-light-danger').click({force: true})

        })

    })

    it('Chat => manage Abuse', () => {
        //Chat

        cy.get('.tn-chat > .i-holder').should("be.visible").then(($btn) => {
            cy.get('.tn-chat > .i-holder', { timeout: 1000 }).click({force: true})
            cy.contains('Live Chat').should("be.visible")
            cy.contains('Direct').should("be.visible")
        })

        // Manage Abuse

        cy.get('.tn-manage > .i-holder').should("be.visible").then(($btn) => {
            cy.get('.tn-manage > .i-holder', { timeout: 1000 }).click()
            cy.contains('Action Taken') // visible
        })
    })

    it('validate bottom bar operation"', () => {

        // All both Visible
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
            //cy.get(':nth-child(1) > .i-holder > .icon > use').click({force: true})
            //cy.get(':nth-child(1) > .i-holder > .icon > use').click({force: true})
        })

        //mic
        cy.get(':nth-child(2) > .i-holder > .icon > use').should("be.visible").then(($btn) => {
            cy.get(':nth-child(1) > .i-holder > .icon > use').should("be.visible")
            //cy.get(':nth-child(2) > .i-holder > .icon > use').click({force: true})

        })


        //Screen sharing
        cy.get('#session-broadcast-control-buttons > :nth-child(4) > .i-holder > .icon > use').should("be.visible").then(($btn) => {
            cy.get('#session-broadcast-control-buttons > :nth-child(4) > .i-holder > .icon > use').click({force: true})
            //cy.get('#session-broadcast-control-buttons > :nth-child(4) > .i-holder > .icon > use').click({force: true})
        })


        cy.get('.inner > .i-holder > .icon-c > use').should("be.visible").click().then(($btn) => {
            cy.get('.item-smile > span').click()
            cy.get('.item-thumb > span').click()
            cy.get('.item-clap > span').click()
            cy.get('.item-like > span').click()
            cy.get('.item-insightfull > span').click()
            cy.get('.item-thankyou > span').click()

        })

        //smiley
        /*cy.get('.inner > .i-holder > .icon-c > use').should("be.visible").then(($btn) => {
            cy.get('.inner > .i-holder > .icon-c > use').click()
            //cy.get('.inner > .i-holder > .icon-c > use').click({force: true})
            cy.get('.item-smile > span').click()
            cy.wait(1000)
            cy.get('.inner > .i-holder > .icon-c > use').click()
            cy.get('.item-smile > span').click()
            cy.wait(1000)
            cy.get('.inner > .i-holder > .icon-c > use').click()
            cy.get('.item-thumb > span').click()
            cy.wait(1000)
            cy.get('.inner > .i-holder > .icon-c > use').click()
            cy.get('.item-clap > span').click()
            cy.wait(1000)
            cy.get('.inner > .i-holder > .icon-c > use').click()
            cy.get('.item-like > span').click()
            cy.wait(1000)
            cy.get('.inner > .i-holder > .icon-c > use').click()
            cy.get('.item-insightfull > span').click()
            cy.wait(1000)
            cy.get('.inner > .i-holder > .icon-c > use').click()
            cy.get('.item-thankyou > span').click()
            cy.wait(1000)
        })*/
        //smiley
      /*  cy.get('.inner > .i-holder > .icon-c > use').should("be.visible").then(($btn) => {
            cy.get('.inner > .i-holder > .icon-c > use').click({force: true})
            //cy.get('.inner > .i-holder > .icon-c > use').click({force: true})
            cy.get('.item-smile > span').click({force: true})
            cy.wait(1000)
            cy.get('.inner > .i-holder > .icon-c > use').click({force: true})
            cy.get('.item-smile > span').click({force: true})
            cy.wait(1000)
            cy.get('.inner > .i-holder > .icon-c > use').click({force: true})
            cy.get('.item-thumb > span').click({force: true})
            cy.wait(1000)
            cy.get('.inner > .i-holder > .icon-c > use').click({force: true})
            cy.get('.item-clap > span').click({force: true})
            cy.wait(1000)
            cy.get('.inner > .i-holder > .icon-c > use').click({force: true})
            cy.get('.item-like > span').click({force: true})
            cy.wait(1000)
            cy.get('.inner > .i-holder > .icon-c > use').click({force: true})
            cy.get('.item-insightfull > span').click({force: true})
            cy.wait(1000)
            cy.get('.inner > .i-holder > .icon-c > use').click({force: true})
            cy.get('.item-thankyou > span').click({force: true})
            cy.wait(1000)
        })*/


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

    it('Post End Session validation', () => {

            cy.wait(4000)

            //mic
            cy.get(':nth-child(2) > .i-holder > .icon > use').should("be.visible").then(($btn) => {
                cy.get(':nth-child(1) > .i-holder > .icon > use').should("be.visible")
               // Check mic is disabled


            })
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

        it('Exit operation', () => {

           /* cy.get('.introjs-skipbutton').should("be.visible").then(($btn) => {
                cy.get('.introjs-skipbutton').click({force: true})
            })*/

            //Closing Popup
            cy.get('[class="close btn-close"]').should("be.visible").then(($btn) => {
                cy.get('[class="close btn-close"]').click({force: true})
            })

            //Exit button
            cy.get('button[title="Exit Airmeet"]').click()
            //star rating
            cy.get(':nth-child(5) > .icon > use').click()
        })
    })