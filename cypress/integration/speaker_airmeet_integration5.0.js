describe('Airmeet Backstage Smoke test', () => {

    beforeEach(() => {
        cy.restoreLocalStorageCache();
    });

    afterEach(() => {
        cy.saveLocalStorageCache();
    });
    let link_text = ""
    var invitationLink;
    var event;
    var host_link;
    function makeid(length) {
        var result           = '';
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }

    it('Go to Airmeet and register multisession Airmeet event"', () => {
        /*cy.visit('https://www.airmeet.com/community-manager/ab8b8769-69f3-4a7e-ba5e-1d45c8929334')
        cy.title('Airmeet: Testing_Security')*/

        cy.visit(Cypress.env('demo.url'));

        ///login
        cy.get('.d-inline-block').click()

        //
        cy.get('.auth-choices > .d-flex > .btn').click()



        //Email
        cy.xpath('//*[@id="root"]//label[@for="email"]').should("be.visible").then(($btn) => {
            cy.xpath('//*[@id="root"]//label[@for="email"]')
                .type('rajakumar.thakur18@gmail.com')
        })

        cy.get('.mr-1').click()
        cy.get('#password').type('testing@123', {force: true})

        cy.get('[data-testid=form] > .btn').click()


        // Post Login- Operation
        cy.get('a > .d-none').click()
        cy.wait(5000)
        cy.get('.btn > .d-none').click()

        //Multisession Airmeet
        cy.get('.no-style > :nth-child(1) > .btn-group > .dropdown-menu > :nth-child(2)').click()


        //Create an airmeet

        cy.wait(2000)

        cy.get('#name').type('test_airmeet')

        cy.get('#description').type('test')

        cy.get(':nth-child(2) > .inner').click()

        cy.get('.form-btn > .btn').click()

        cy.contains('Create this Airmeet').click()

        //Multisession Overview
        cy.get('.no-style > :nth-child(1) > .btn-group > .dropdown-menu > :nth-child(2)')

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
        cy.get('#bio').type('Testing Multi session')
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

//cy.get('#summary').type('Session #3')
        cy.get('.add-speaker').click()
        cy.get('#name').type('Adding Session #3', {force:true})
        cy.get('button[class="btn btn-primary"]').click()
        cy.wait(2000)
//cy.get('#summary').type('Session #4')
        cy.get('.add-speaker').click()
        cy.get('#name').type('Adding Session #4', {force:true})
        cy.get('button[class="btn btn-primary"]').click()
        cy.wait(2000)
//cy.get('#summary').type('Session #5')
        cy.get('.add-speaker').click()
        cy.get('#name').type('Adding Session #5', {force:true})
        cy.get('button[class="btn btn-primary"]').click()
        cy.wait(2000)
//cy.get('#summary').type('Session #6')
        cy.get('.add-speaker').click()
        cy.get('#name').type('Adding Session #6', {force:true})
        cy.get('button[class="btn btn-primary"]').click()
        cy.wait(2000)


//click Add-more details
        cy.get('button[class="btn btn-primary"]').click()
        cy.wait(2000)

//update and share airmeet
        cy.get('button[class="btn btn-primary"]').click()
        cy.wait(2000)


        cy.post_airmeet_creation_validation()

        //Go to link
        cy.get('.copy_url > p').then(($btn) => {

            //Demo
            host_link = $btn.text()
            event = host_link.substring(27);
            var final_link = 'https://demo.airmeet.com/airmeets/'+event+'/summary'


            //Prod
            /*var event = link_text.substring(21);
            var final_link = 'https://www.airmeet.com/airmeets'+event+'/summary'
            */

            cy.visit(final_link)
        })


    })

    it('Go to created Airmeet ', () => {

        cy.wait(5000)

        cy.get('#speakers').should("be.visible").click()

        cy.get('#speakers').should("be.visible").then(($btn) => {
            //cy.get('#speakers').click()
            cy.wait(2000)
            //Add new Speakers
            cy.get('.airmeet-outer > .btn').should("be.visible")
            cy.get('.airmeet-outer > .btn').click()
            cy.get('#name').type(makeid(8))
            cy.get('#email').type(makeid(9)+"@yopmail.com")
            cy.get('#organisation').type("Airmeet Network")
            cy.get('#designation').type("Executive")
            cy.get('#city').type("Delhi NCR")
            cy.get('#country').type("Australia")
            cy.get('#bio').type("Raja Thakur_bio")
            cy.get('.btn-outer > .btn').click()
            cy.wait(2000)


        })

        cy.wait(4000)


        cy.get('#speakers').should("be.visible").then(($btn) => {
            cy.get('#speakers').click()
            cy.wait(2000)
            //Add new Speakers
            cy.get('.airmeet-outer > .btn').should("be.visible")
            cy.get('.airmeet-outer > .btn').click()
            cy.get('#name').type(makeid(8))
            cy.get('#email').type(makeid(9)+"@yopmail.com")
            cy.get('#organisation').type("Airmeet Network")
            cy.get('#designation').type("Executive")
            cy.get('#city').type("Delhi NCR")
            cy.get('#country').type("Austraila")
            cy.get('#bio').type("Raja Thakur_name_changed")
            cy.get('.btn-outer > .btn').click()
            cy.wait(2000)


        })

        cy.get('#sessions').then(($btn) => {
            cy.get('#sessions').click()

            cy.get('[class="airmeet-outer session-outer"]').should("be.visible")
            cy.get(':nth-child(1) > :nth-child(1) > .edit-links > .edit').click()
            cy.wait(3000)
            cy.get('.form-field > #summary').type('updating session')
            cy.contains('Select speakers, you added earlier').should("be.visible").then(($btn) => {
                cy.contains('Select speakers, you added earlier')
                    .click()

                cy.xpath('(//*[starts-with(@id,"react-select")])[2]')
                    .should("be.visible")
                    .click()

            })

            cy.get('.form-btn > .btn').click()
            cy.contains('Session details successfully updated.').should("be.visible")
        })
        cy.get('#sessions').then(($btn) => {
            cy.get('#sessions').click()

            cy.get('[class="airmeet-outer session-outer"]').should("be.visible")
            cy.get(':nth-child(2) > :nth-child(1) > .edit-links > .edit').click()
            cy.wait(3000)
            cy.get('.form-field > #summary').type('updating session')
            cy.contains('Select speakers, you added earlier').should("be.visible").then(($btn) => {
                cy.contains('Select speakers, you added earlier')
                    .click()

                cy.xpath('(//*[starts-with(@id,"react-select")])[3]')
                    .should("be.visible")
                    .click()

            })

            cy.get('.form-btn > .btn').click()
            cy.contains('Session details successfully updated.').should("be.visible")
        })

    })

    it('Host user-> Go Live and Exit', () => {

        cy.log('Opening host link ' +host_link)
        cy.visit(host_link)

        cy.wait(10000)

        cy.contains('Go Live').should("be.visible").then(($btn) => {
            cy.contains('Go Live').click({force: true})
            //yes
            cy.get('.action-btns > .btn-primary').click()
        })

       // cy.wait(10000)

        //Test your mic steup
        cy.wait(15000)
        cy.get('.r-outer > .d-flex > :nth-child(1)').click()

        cy.wait(5000)
        //Exit button
        cy.get('button[title="Exit Airmeet"]').click()
        //star rating
        cy.get(':nth-child(5) > .icon > use').click()


    })

    it('Extract speaker link', () => {

       /* cy.wait(5000)
        cy.get('#speakers').should("be.visible").click()*/

        //var token =  Cypress.env('demo.token');
        var token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJxRnBRajhkdlUiLCJpc3MiOiJodHRwczovL2Fpcm1lZXQuY29tIiwianRpIjoiZjE0ZWU5MzUtNDA2Yy00M2ZjLTg2ZGMtMzI5MmI1YTYwNDVmIiwiaWF0IjoxNTk1NDAwOTU2LCJleHAiOjE2MjY5MzY5NTZ9.v54zlkwguynPXNnIy-EU_JEqT0q2yjDe1n3Wa_y3Tw0"
        //cy.log(cy.getCookie('authUserToken'))

        event = "bb606440-cfdd-11ea-b8fd-0394f82e5ada"
        //cy.server()
        cy.request({
            method: "GET",
            //url: 'https://demoapi.airmeet.com/api/v1/airmeet?airmeetId=2b7ffe30-cbe1-11ea-bdd3-1144119c7e91',
            url: 'https://demoapi.airmeet.com/api/v1/airmeet?airmeetId='+event+'',
            headers: {
                'accept': 'application/json',
                'X-AccessToken': token
            }
        }).as('invitationAPI')

        //var invitationLink;
        cy.get('@invitationAPI').then((response) => {
            return new Promise(resolve => {
                expect(response).property('status').to.equal(200)
                //expect(response.body).property('tables').to.not.be.oneOf([null, ""])
                const respBody = response.body;
                var boardId = respBody['speakers']
                //cy.log(boardId)
                //cy.log(boardId['1']['invitationLink'])
                 invitationLink=boardId['1']['invitationLink']
                //cy.log('Opening link:: ' +invitationLink)
                resolve(boardId)
            })


        })

        //cy.log('Opening link:: ' +invitationLink)

    })

    it('Open speaker link', () => {
        cy.wait(10000)
       cy.clearLocalStorageCache();

       cy.log('Opening link:: ' +invitationLink)
       cy.visit(invitationLink)

       //cy.wait(10000)

        //cy.wait(10000)

        //Test your mic steup
        cy.wait(15000)
        cy.get('.r-outer > .d-flex > :nth-child(1)').click()

    })

    it.skip('Permission flow', () => {

        //cy.wait(10000)

        //Test your mic steup
        cy.wait(15000)
        cy.get('.r-outer > .d-flex > :nth-child(1)').click()


    })

    it.skip('Close Pop up flow', () => {

        cy.wait(8000)
          cy.get('.introjs-skipbutton').should("be.visible").then(($btn) => {
            cy.get('.introjs-skipbutton').click({force: true})
        })

        //cy.wait(2000)
       /* //Closing Popup
        cy.get('[class="close btn-close"]').should("be.visible").then(($btn) => {
            cy.get('[class="close btn-close"]').click({force: true})
        })*/

    })

    it('Social lounge validation', () => {

        //cy.wait(8000)

        //Social lounge validation
        //Session option
        cy.get('.tn-sessions > .i-holder').should("be.visible").then(($btn) => {
            cy.get('span[title="Sessions"]').should("be.visible")
        })

        // Manage Abuse
        cy.get('.tn-manage > .i-holder').should("not.be.visible")

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

        //Hide
        cy.get('.hide-unhide > .i-holder').should("not.be.visible")

    })


    it('Go to backstage', () => {

        //click on Backstage
        cy.get('.btn > .sc-AxheI').should('be.visible').then(($btn) => {
            cy.get('.btn > .sc-AxheI').click({force: true})
            cy.wait(10000)
        })

    })

    it.skip('Close Pop up flow', () => {

        cy.wait(3000)
        cy.get('.introjs-skipbutton').should("be.visible").then(($btn) => {
            cy.get('.introjs-skipbutton').click({force: true})
        })

        //cy.wait(2000)
        /* //Closing Popup
         cy.get('[class="close btn-close"]').should("be.visible").then(($btn) => {
             cy.get('[class="close btn-close"]').click({force: true})
         })*/

    })

    it('Backstage validation', () => {

        //cy.wait(8000)

        //Social lounge validation
        //Session option
        cy.get('.tn-sessions > .i-holder').should("be.visible").then(($btn) => {
            cy.get('span[title="Sessions"]').should("be.visible")
        })

        // Manage Abuse
        cy.get('.tn-manage > .i-holder').should("not.be.visible")

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

        //Hide
        cy.get('.hide-unhide > .i-holder').should("not.be.visible")

        //smiley
        cy.get('.inner > .i-holder > .icon-c > use').should("not.be.visible")

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

        /*cy.get('#session-broadcast-control-buttons > :nth-child(4) > .i-holder > .icon > use').should("be.visible").then(($btn) => {
            cy.get('#session-broadcast-control-buttons > :nth-child(4) > .i-holder > .icon > use').click({force: true})
            cy.get('#session-broadcast-control-buttons > :nth-child(4) > .i-holder > .icon > use').click({force: true})
        })
        */
        //Yes/No

        cy.get('.vote-toggle > .i-holder > .icon').should("not.be.visible")



    })

    it('Exit operation', () => {

        //Exit button
        cy.get('button[title="Exit Airmeet"]').click()
        //star rating
        cy.get(':nth-child(5) > .icon > use').click()
    })


})