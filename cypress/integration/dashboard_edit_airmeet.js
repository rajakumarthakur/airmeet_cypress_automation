describe('Airmeet Backstage Smoke test', () => {

    it('Edit_airmeet validation', () => {

        //Calling URL from cypress.json
        //cy.visit("https://demo.airmeet.com/airmeets/813f4d10-c1a7-11ea-8984-b5d1b3bf52ec/summary");
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

        //Enter session which needs to changes
        cy.visit(Cypress.env('edit_airmeet'));

        //Host details
        cy.wait(8000)

        function makeid(length) {
            var result           = '';
            var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for ( var i = 0; i < length; i++ ) {
                result += characters.charAt(Math.floor(Math.random() * charactersLength));
            }
            return result;
        }

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
            cy.get('#bio').type("Random textRandom textRandom textRandom text")
            cy.contains('Update host details').click()
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
            cy.contains('Select speakers, you added earlier').should("be.visible")
                .click()
            //.eq(1)
            //.focus()
            //.type('test user 1', {force:true})
            //cy.get('#react-select-2-option-0').click()
            cy.get('#react-select-4-option-0').click()

            cy.get('.form-btn > .btn').click()


        })

        cy.get('#sessions').then(($btn) => {
            cy.get('#sessions').click()

            cy.get('[class="airmeet-outer session-outer"]').should("be.visible")
            cy.get(':nth-child(2) > :nth-child(1) > .edit-links > .edit').click()
            cy.wait(3000)
            cy.get('.form-field > #summary').type('updating session')
            cy.contains('Select speakers, you added earlier').should("be.visible")
                .click()
            cy.get('#react-select-5-option-0').click()

            cy.get('.form-btn > .btn').click()


        })

        cy.wait(4000)

        //Manage registrants
        cy.get('#registrants').click({force: true})

        //Manage recording
        cy.get('#recordings').click()

         //Manage recording
        // cy.get('#recordings').click()

        cy.get('#branding').click()

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