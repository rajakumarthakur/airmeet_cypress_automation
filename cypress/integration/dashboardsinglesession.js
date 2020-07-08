describe('Airmeet Smoke test- DashBoard', () => {

    it('Go to Airmeet and register single Session event', () => {

        cy.visit('https://demo.airmeet.com/community-manager/4236b770-e72f-4377-a7aa-1320deff9314')
        cy.title('Airmeet: Testing_Security')

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
        cy.get('button[class="btn btn-primary"]').click()
        cy.wait(2000)

        //Cancel
       //cy.get('button').click({ position: 'topLeft' })*/
        //close button working
        cy.get('button[class="close btn-close"]').click({force:true}, {multiple:true})

    })
})