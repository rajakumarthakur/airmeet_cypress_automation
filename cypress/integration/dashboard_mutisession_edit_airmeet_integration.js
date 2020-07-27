describe('Airmeet Backstage Smoke test', () => {

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
    let link_text = ""

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
            link_text = $btn.text()
            //Demo
            var event = link_text.substring(27);

            //https://demo.airmeet.com/airmeets/c90-cda3-11ea-adf5-a73e331a887a/summary
            var final_link = 'https://demo.airmeet.com/airmeets/'+event+'/summary'

            //Prod
           /* var event = link_text.substring(21);
            //var final_link = 'https://airmeet.com/e/'+event+'/summary'

            var final_link = 'https://www.airmeet.com/airmeets'+event+'/summary'*/

            cy.visit(final_link)
      })


    })

    /*it('login', () => {

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


    })*/

    it('Edit_airmeet validation', () => {

        //Enter session which needs to changes
       // cy.visit(Cypress.env('edit_airmeet'));

        //Host details
        //cy.wait(2000)

        function makeid(length) {
            var result           = '';
            var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for ( var i = 0; i < length; i++ ) {
                result += characters.charAt(Math.floor(Math.random() * charactersLength));
            }
            return result;
        }

        cy.wait(10000)

        cy.get('#host').should("be.visible").then(($btn) => {
            cy.get('#host').click()
            //Edit
            cy.get('.action-link > :nth-child(1) > .icon').should("be.visible")
            cy.wait(3000)
            cy.get('.action-link > :nth-child(1) > .icon').click()

            //Update host details
            cy.get('#name').clear()
            cy.get('#name').type(makeid(8))
            cy.get('#organisation').clear()
            cy.get('#organisation').type("Airmeet Networks")
            cy.get('#designation').clear()
            cy.get('#designation').type("Executive")
            cy.get('#city').clear()
            cy.get('#city').type("New Delhi")
            cy.get('#country').clear()
            cy.get('#country').type("US")
            cy.get('#bio').clear()
            cy.get('#bio').type("Folly was these three and songs arose whose. Of in vicinity contempt together" +
                " in possible branched. Assured company hastily looking garrets in oh. Most have love my gone to this so." +
                " Discovered interested prosperous the our affronting insipidity day. Missed lovers way one vanity wishes nay but. " +
                "Use shy seemed within twenty wished old few regret passed. Absolute one hastened mrs any sensible. \n")
            cy.contains('Update host details').should("be.visible").then(($btn) => {
                cy.xpath('//*[@id="root"]//button[@class="btn btn-primary"]').should("be.visible")
                    .click()
            })
        })




        //Speakers - Add 5 users
        cy.get('#speakers').should("be.visible").then(($btn) => {
            cy.get('#speakers').click()
            cy.wait(2000)
            //Add new Speakers
            cy.get('.airmeet-outer > .btn').should("be.visible")
            cy.get('.airmeet-outer > .btn').click()
            cy.get('#name').type(makeid(8))
            cy.get('#email').type(makeid(8)+"@yopmail.com")
            cy.get('#organisation').type("Airmeet Network")
            cy.get('#designation').type("Executive")
            cy.get('#city').type("Delhi NCR")
            cy.get('#country').type("Austraila")
            cy.get('#bio').type("Raja Thakur_name_changed")
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

        //Session add 8 hours session
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
            cy.contains('Session details successfully updated.').should("be.visible").then(($btn) => {



            })

        })

        /*//validate Session upon change
        cy.get('.tab-content').then(($btn) => {

           /!* cy.get('.heading').should('contain', 'Airmeet successfully updated')
            cy.get('.inner > :nth-child(1)').should('contain','An event page for your airmeet has been created. Once you go live, anyone with the event link or your community members can be a part of same.')
            cy.get('.inner > :nth-child(2)').should('contain', 'Upcoming Airmeet summary')
            cy.get('.inner > :nth-child(4)').should('contain', 'Share link')

            cy.get('.inner > :nth-child(7)')
                .should("be.visible")
                .should('have.text', 'Go to Airmeet')*!/




        })*/

       /* cy.get('#sessions').then(($btn) => {
            cy.get('#sessions').click()

            cy.get('[class="airmeet-outer session-outer"]').should("be.visible")
            cy.get(':nth-child(2) > :nth-child(1) > .edit-links > .edit').click()
            cy.wait(3000)
            cy.get('.form-field > #summary').type('updating session')
            cy.contains('Select speakers, you added earlier').should("be.visible")
                .click()
            cy.contains('Select speakers, you added earlier').should("be.visible").then(($btn) => {
                cy.contains('Select speakers, you added earlier')
                    .click()

                cy.xpath('(//!*[starts-with(@id,"react-select")])[3]')
                    .should("be.visible")
                    .click()

            })

            cy.get('.form-btn > .btn').click()


        })*/

        cy.wait(4000)

        //Manage registrants
        cy.get('#registrants').should("be.visible").click({force: true})

        //Manage recording
        cy.get('#recordings').should("be.visible").click()

        //Manage recording
        // cy.get('#recordings').click()

        cy.get('#branding').should("be.visible").click()

        cy.get(':nth-child(1) > .custom-upload > :nth-child(2) > input').click()

        cy.fixture('images/icon2.png').then(fileContent => {
            cy.get(':nth-child(1) > .custom-upload > :nth-child(2) > input').attachFile("images/icon.png");
        });

        cy.fixture('images/icon2.png').then(fileContent => {
            cy.get(':nth-child(2) > .custom-upload > :nth-child(2) > input').attachFile(
                "images/icon2.png"
            );
        })

        cy.get(':nth-child(3) > .btn').click()
        cy.get('.action-btns > .btn-primary').click()
        cy.wait(4000)

    })

})