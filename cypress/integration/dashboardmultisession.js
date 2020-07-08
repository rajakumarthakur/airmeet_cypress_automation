describe('Airmeet Smoke test- DashBoard', () => {
    it('Go to Airmeet and register & register Airmeet event"', () => {
        cy.visit('https://demo.airmeet.com/community-manager/4236b770-e72f-4377-a7aa-1320deff9314')
        cy.title('Airmeet: Testing_Security')

        //login
        cy.get('.d-inline-block').click()
        cy.get('.auth-choices > .d-flex > .btn').click()
        cy.get('label').type('rajakumar.thakur18@gmail.com')
        Cypress.log(cy.get('label'))


        //Login
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
        cy.get('#name').type('Adding Session #4', {force:true})
        cy.get('button[class="btn btn-primary"]').click()
        cy.wait(2000)
//cy.get('#summary').type('Session #6')
        cy.get('.add-speaker').click()
        cy.get('#name').type('Adding Session #4', {force:true})
        cy.get('button[class="btn btn-primary"]').click()
        cy.wait(2000)


//click Add-more details
        cy.get('button[class="btn btn-primary"]').click()
        cy.wait(2000)

//update and share airmeet
        cy.get('button[class="btn btn-primary"]').click()
        cy.wait(2000)

        //Cancel
        /*cy.get('.modal-header').click()
        cy.get('button[class="close btn-close"]').click
        cy.get('button[data-dismiss="modal"]').click
        cy.get('button').click({ position: 'topLeft' })*/
        //close button working
        cy.get('button[class="close btn-close"]').click({force:true}, {multiple:true})

    })
})